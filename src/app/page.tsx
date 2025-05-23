"use client";
import Form from "@/components/form";
import React, { useState } from "react";

export default function Home() {
  const [formType, setFormType] = useState<"request" | "claim">("request");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Welcome to the Peanut Challenge </h1>
      <div className="">
        {/* Buttons  */}
        <div
          className={`bg-pink-400 hover:bg-pink-500 py-4 px-8 rounded-lg shadow-lg flex items-center justify-center text-white my-2 cursor-pointer ${
            formType === "request" ? "ring-4 ring-pink-200" : ""
          }`}
          onClick={() => setFormType("request")}
        >
          Request
        </div>
        <div
          className={`bg-pink-400 hover:bg-pink-500 py-4 px-8 rounded-lg shadow-lg flex items-center justify-center text-white cursor-pointer ${
            formType === "claim" ? "ring-4 ring-pink-200" : ""
          }`}
          onClick={() => setFormType("claim")}
        >
          Claim
        </div>
      </div>
      <Form type={formType} />
    </div>
  );
}
