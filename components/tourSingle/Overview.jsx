import React from "react";
import { overview } from "@/data/overview";
export default function Overview({ id }) {
  const obj = overview[id];

  return (
    <>
      <h2 className="text-30">{obj.heading}</h2>
      <p className="mt-20">{obj.para}</p>

      <h3 className="text-20 fw-500 mt-20">{obj.subHeding}</h3>
      <ul className="mt-20 ulList">
        {obj.list.map((ListItem, idx) => {
          return <li key={idx}>{ListItem.text}</li>;
        })}
      </ul>
    </>
  );
}
