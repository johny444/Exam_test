import React, { useState } from "react";
import { Radio } from "antd";
import { Link } from "react-router-dom";
export const Radio1 = () => {
  const [value, setValue] = useState([1]);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <h1>1</h1>
      <Radio.Group value={value}>
        <Radio onChange={onChange} value={1} selected>
          1
        </Radio>
        <Radio onChange={onChange} value={2} selected>
          2
        </Radio>
        <Radio onChange={onChange} value={3} selected>
          3
        </Radio>
        <Radio onChange={onChange} value={4} selected>
          4
        </Radio>
        <br />
      </Radio.Group>
      <button>
        <Link to={"/Radio2"}>go</Link>
      </button>
    </div>
  );
};
