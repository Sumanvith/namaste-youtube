import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex">
      <div className="flex">
        {list.map((item, index) => (
          <Button key={index} name={item}></Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
