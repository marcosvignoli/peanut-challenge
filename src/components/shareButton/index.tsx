"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const ShareButton = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <button
        onClick={() => {
          const url = `${window.location.origin}/claim?id=${id}`;
          navigator.clipboard.writeText(url);
        }}
        className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500"
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareButton;
