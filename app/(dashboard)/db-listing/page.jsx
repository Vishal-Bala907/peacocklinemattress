import DBListing from "@/components/dasboard/DBListing";
import React from "react";

export const metadata = {
  title: "Peacockline mattress",
  description: "Peacockline mattress",
};

export default function page() {
  return (
    <>
      <main>
        <DBListing />
      </main>
    </>
  );
}
