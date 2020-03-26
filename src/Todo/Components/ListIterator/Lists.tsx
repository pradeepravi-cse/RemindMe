import React from "react";

import "./lists.scss";
interface Data {
  text: string;
  completed: boolean;
}
export function Lists({ data, updateData }) {
  console.log(data);

  if (!data) {
    return null;
  }
  return (
    <>
      {Object.keys(data).map((k, i) => {
        return (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              marginBottom: "10px"
            }}
          >
            <input
              type="checkbox"
              onChange={updateData}
              value={k}
              checked={data[k].completed}
            />
            <span
              className={data[k].completed ? "strikeText" : ""}
              style={{ marginLeft: "10px", fontFamily: "Arial" }}
            >
              {data[k].text}
            </span>
          </div>
        );
      })}
    </>
  );
}
