import axios from "axios";
import React, { useEffect, useState } from "react";
import { Radio, Pagination, Button } from "antd";
const pageSize = 1;

const getResults = (questions, answers) => {
  let complete = true;
  let score = 0;

  questions.forEach((question) => {
    const givenAnswer = answers[question.id];

    if (givenAnswer === undefined) {
      complete = false;
    }

    if (givenAnswer === question.answer) {
      score++;
    }
  });

  return {
    score,
    complete,
  };
};
export const Question = () => {
  const fetchQuestion = async () => {
    const response = await axios.get(" http://localhost:4444/Question");
    // console.log("fetchQuestion", rs.data);

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

  const { Question, current } = allQuestion;
  // console.log("Question", Question);

  const [answer, setAnswer] = useState({});

  const onChange2 = (e) => {
    // console.log("radio checked", e.target.checked);
    // console.log("Answer of question", e.target.name);

    setAnswer({ ...answer, [e.target.name]: e.target.value });
  };
  // console.log("answer", answer);

  // ----------------------------
  const [score, setScore] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { complete, score } = getResults(Question, answer);

    if (complete) {
      console.log("From setScore");

      setScore(score);
    }
  };
  console.log("answer", answer);

  return (
    <div>
      {Question.length <= 2 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <br />
          <p>----------------------------------------------------------</p>
          <form onSubmit={handleSubmit}>
            {Question[count].question_name}
            <br />
            {Question[count].answer}
            <br />
            <Radio
              value={Question[count].option_one}
              onChange={onChange2}
              name={Question[count].id}
              checked={
                answer[Question[count].id] === Question[count].option_one
              }
            />
            A.&nbsp;{Question[count].option_one}
            <br />
            <Radio
              value={Question[count].option_two}
              onChange={onChange2}
              name={Question[count].id}
              checked={
                answer[Question[count].id] === Question[count].option_two
              }
            />
            B.&nbsp;{Question[count].option_two}
            <br />
            <Radio
              value={Question[count].option_three}
              onChange={onChange2}
              name={Question[count].id}
              checked={
                answer[Question[count].id] === Question[count].option_three
              }
            />
            C.&nbsp;{Question[count].option_three}
            <br />
            <Radio
              value={Question[count].option_four}
              onChange={onChange2}
              name={Question[count].id}
              checked={
                answer[Question[count].id] === Question[count].option_four
              }
            />
            D.&nbsp;{Question[count].option_four}
            <br />
            <p>----------------------------------------------------------</p>
            {/* {Question.map((data, index) => {
            return (
              index >= minIndex &&
              index < maxIndex && (
                <div key={data.id}>
                  <h3>{data.question_name}</h3>
                  <Radio.Group name={data.id} onChange={onChange2}>
                    <Space direction="vertical" align="center" size={50}>
                      <Space direction="horizontal" size={200}>
                        <Radio value={data.option_one}>
                          A.&nbsp;{data.option_one}
                        </Radio>
                        <Radio
                          value={data.option_two}
                          checked={answer[data.id] === data.option_two}
                        >
                          B.&nbsp;{data.option_two}
                        </Radio>
                      </Space>
                      <Space direction="horizontal" size={200}>
                        <Radio
                          value={data.option_three}
                          checked={answer[data.id] === data.option_three}
                        >
                          C.&nbsp;{data.option_three}
                        </Radio>
                        <Radio
                          value={data.option_four}
                          checked={answer[data.id] === data.option_four}
                        >
                          D.&nbsp;{data.option_four}
                        </Radio>
                      </Space>
                    </Space>
                  </Radio.Group>
                </div>
              )
            );
          })} */}
            <Pagination
              pageSize={pageSize}
              current={current}
              total={Question.length}
              onChange={handleChange}
              style={{ bottom: "0px" }}
            />
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </form>
        </div>
      )}
      <h1>Score will be shown here</h1>
      <div className="Quiz-output">
        <h2>
          {score === 0
            ? "Score: For each correct answer you will get 1 point"
            : "score: " + score}
        </h2>
      </div>
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
