import Invoice from "@/components/Invoice";
import React from "react";

export const metadata = {
  title: "Peacockline mattress",
  description: "Peacockline mattress",
};

export default function page() {
  return (
    <>
      <main>
        <Invoice />
      </main>
    </>
  );
}
