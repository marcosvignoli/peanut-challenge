import ShareButton from "@/components/shareButton";
import React from "react";

import { data } from "../../../data";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { id?: string; amount?: string };
}) {
  const id = searchParams?.id;
  const amount = searchParams?.amount;

  return {
    title: `Peanut Claim`,
    description: `Click to claim your peanut challenge reward for ID ${id}.`,
    openGraph: {
      title: `${data.user.username} is sending you $${amount}`,
      description: `Click to claim your payment of $${amount}`,
      url: `http://localhost:3000/claim?id=${id}&amount=${amount}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.user.username} is sending you $${amount}`,
      description: `Click to claim your payment of $${amount}`,
    },
  };
}

const Claim = ({
  searchParams,
}: {
  searchParams: { id?: string; amount?: string };
}) => {
  const amount = searchParams?.amount;
  return (
    <div>
      <h1>Claim</h1>
      <p className="text-lg mt-2">
        ${data.user.username} is sending you{" "}
        <span className="font-bold text-pink-500">${amount}</span>
      </p>
      <ShareButton />
    </div>
  );
};

export default Claim;
