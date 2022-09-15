import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import axios from "axios";
const pageSize = 6;

function App() {
  const [state, setState] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  console.log("first", state);
  const fetchQuestion = async () => {
    const response = await axios
      .get("https://api.github.com/gists/public")
      .catch((err) => {
        console.log("ERRO form fetchQuestion", err);
      });

    // const { data } = response;
    // console.log("data", data.length);

    setState({
      data: response.data,
      totalPage: response.data.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    });
  };
  useEffect(() => {
    fetchQuestion();
  }, []);
  const handleChange = (page) => {
    setState({
      ...state,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  const { data, current, minIndex, maxIndex } = state;
  console.log("seconde", state);
  return (
    <div className="App" style={{ marginTop: "20px" }}>
      <h1>Git Hub Accounts</h1>
      <ul>
        {data?.map(
          (data, index) =>
            index >= minIndex &&
            index < maxIndex && (
              <li
                key={data.id}
                style={{ lineHeight: "30px", fontWeight: "500" }}
              >
                {data.owner.login}
              </li>
            )
        )}
      </ul>
      <Pagination
        pageSize={pageSize}
        current={current}
        total={data.length}
        onChange={handleChange}
        style={{ bottom: "0px" }}
      />
    </div>
  );
}
export default App;
