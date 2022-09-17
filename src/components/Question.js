import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Radio, Pagination, Button, Space } from "antd";
const pageSize = 2;
export const Question = () => {
  const [Questions, setQuestion] = useState([]);

  const fetchQuestion = async () => {
    const response = await axios.get(" http://localhost:4444/Question");
    // console.log("fetchQuestion", rs.data);
    setQuestion(response.data);
    setAllQuestion({
      Question: response.data,
      totalPage: response.data.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    });
  };
  const [allQuestion, setAllQuestion] = useState({
    Question: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const handleChange = (page) => {
    console.log("page", page);
    console.log("value og page", value);
    setValue();
    setCount(page - 1);
    setAllQuestion({
      ...allQuestion,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  useEffect(() => {
    fetchQuestion();

    // console.log("useEffect called");
  }, []);
  const [count, setCount] = useState(0);

  const { Question, current, minIndex, maxIndex } = allQuestion;
  // console.log("Question", Question);
  const [value, setValue] = useState(3);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      {Question.length <= 2 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>----------------------------------------------------------</p>
          {Question[count].question_name}
          <br />
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical" align="center" size={50}>
              <Space direction="horizontal" size={200}>
                <Radio value={Question[count].option_one}>
                  A.&nbsp;{Question[count].option_one}
                </Radio>
                <Radio value={Question[count].option_two}>
                  B.&nbsp;{Question[count].option_two}
                </Radio>
              </Space>
              <Space direction="horizontal" size={200}>
                <Radio value={Question[count].option_three}>
                  C.&nbsp;{Question[count].option_three}
                </Radio>
                <Radio value={Question[count].option_four}>
                  D.&nbsp;{Question[count].option_four}
                </Radio>
              </Space>
            </Space>
          </Radio.Group>
          <br />
          <p>----------------------------------------------------------</p>
          {Question.map((data, index) => {
            return (
              index >= minIndex &&
              index < maxIndex && (
                <div key={index}>
                  <h3>{data.question_name}</h3>
                </div>
              )
            );
          })}
          <Pagination
            pageSize={pageSize}
            current={current}
            total={Question.length}
            onChange={handleChange}
            style={{ bottom: "0px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Question;
// {Question.map((data, index) => {
//   // console.log("data", data);

//   return (
//     <div key={index}>
//       <h3>{data.question_name}</h3>
//       <button onClick={handlePre}>Pre</button>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// })}
