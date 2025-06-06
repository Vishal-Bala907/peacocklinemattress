import DbBooking from "@/components/dasboard/DbBooking";
import React from "react";

export const metadata = {
  title: "Peacockline mattress",
  description: "Peacockline mattress",
};

export default function page() {
  return (
    <>
      <main>
        <DbBooking />
      </main>
    </>
  );
}
