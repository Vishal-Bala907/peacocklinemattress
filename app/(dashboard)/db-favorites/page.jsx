import Favorites from "@/components/dasboard/Fevorite";
import React from "react";

export const metadata = {
  title: "Peacockline mattress",
  description: "Peacockline mattress",
};

export default function page() {
  return (
    <>
      <main>
        <Favorites />
      </main>
    </>
  );
}
