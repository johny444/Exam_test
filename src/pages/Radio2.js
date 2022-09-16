import { Radio } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Radio2 = () => {
  const value = { op1: 1, op2: 2, op3: 3, op4: 4 };
  console.log("value", value);

  const [currentOption, setCurrentOption] = useState({ current: 1 });
  console.log("currentOption", currentOption);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    localStorage.setItem("option", currentOption.current);
    setCurrentOption({ current: e.target.value });
  };
  const { op1, op2, op3, op4 } = value;
  return (
    <div>
      <h1>2</h1>
      <Radio.Group value={currentOption.current}>
        <Radio onChange={onChange} value={op4}>
          4
        </Radio>
        <Radio onChange={onChange} value={op3}>
          3
        </Radio>
        <Radio onChange={onChange} value={op2}>
          2
        </Radio>
        <Radio onChange={onChange} value={op1}>
          1
        </Radio>
      </Radio.Group>
      <button>
        <Link to={"/"}>back</Link>
      </button>
    </div>
  );
};
