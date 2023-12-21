import React from "react";
import failure from "../../img/failure.gif";
import "./_error.scss";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1 className="error_page">Sometihing is Wrong!</h1>
      <button
        className="error_back"
        type="button"
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </div>
  );
};

export default Error;
