"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "../../../data";

const Form = ({ type }: { type: string }) => {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAmountError("");
    if (type === "claim") {
      // Validate if user has enough balance to pay
      const userBalance = data.user?.balance ?? 0;
      if (Number(amount) > userBalance) {
        setAmountError("You do not have enough balance to pay this amount.");
        return;
      }
      // Generate a random id for the claim (could be replaced with real logic)
      const id = Math.random().toString(36).substring(2, 10);
      // Navigate to /claim?id={id}&amount={amount}
      router.push(`/claim?id=${id}&amount=${amount}`);
    } else if (type === "request") {
      // Username is now consumed from data.user
      const username = data.user?.username || "";
      if (!username) {
        setAmountError("No username found in data.");
        return;
      }
      router.push(`/${username}/${amount}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 flex flex-col gap-4"
    >
      <h4 className="text-xl font-semibold mb-2 text-pink-500">
        Create a {type} link
      </h4>
      <div className="flex flex-col gap-1">
        <label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmountError("");
            // Only allow numbers and empty string
            const val = e.target.value;
            if (/^\d*$/.test(val)) setAmount(val);
          }}
          required
          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
            amountError ? "border-red-500" : ""
          }`}
        />
        {amountError && (
          <span className="text-red-500 text-xs mt-1">{amountError}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded transition-colors mt-2 shadow"
      >
        Create link
      </button>
    </form>
  );
};

export default Form;
