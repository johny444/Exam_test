import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      Login
      <Link to={"/overview"}>
        <button>Click</button>
      </Link>
    </div>
  );
};

export default Login;
