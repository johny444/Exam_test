import { Pagination, Radio } from "antd";
import React, { useState } from "react";
const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];
const optionsWithDisabled = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
    disabled: true,
  },
];

const Question2 = () => {
  const [value1, setValue1] = useState("Apple");
  const [value2, setValue2] = useState("Apple");
  const [value3, setValue3] = useState("Apple");
  const [value4, setValue4] = useState("Apple");

  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }) => {
    console.log("radio2 checked", value);
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }) => {
    console.log("radio4 checked", value);
    setValue4(value);
  };
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      {" "}
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange2}
        value={value2}
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
      <p>------------------------------</p>
      <Radio value={1}>A</Radio>
      <Radio value={2} checked={true}>
        B
      </Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default Question2;
