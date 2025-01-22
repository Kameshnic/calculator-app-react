import React, { useState } from "react";
import "./App.css"; 

const App = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => setInput(input + value);

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => setInput("");

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div
        className="calculator shadow-lg rounded"
        style={{
          backgroundColor: "#2c3e50",
          padding: "20px",
          borderRadius: "25px",
          width: "350px",
        }}
      >
        <div className="screen bg-dark text-light p-3 mb-3 rounded">
          <input
            type="text"
            className="form-control text-end fs-4 bg-transparent border-0 text-light"
            value={input}
            readOnly
          />
        </div>
        <div className="buttons">
          <div className="row mb-2">
            {["7", "8", "9", "/"].map((btn, index) => (
              <div key={index} className="col">
                <button
                  className="btn btn-outline-light w-100 py-3"
                  onClick={
                    btn === "="
                      ? calculateResult
                      : btn === "C"
                      ? clearInput
                      : () => handleInput(btn)
                  }
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
          <div className="row mb-2">
            {["4", "5", "6", "*"].map((btn, index) => (
              <div key={index} className="col">
                <button
                  className="btn btn-outline-light w-100 py-3"
                  onClick={
                    btn === "="
                      ? calculateResult
                      : btn === "C"
                      ? clearInput
                      : () => handleInput(btn)
                  }
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
          <div className="row mb-2">
            {["1", "2", "3", "-"].map((btn, index) => (
              <div key={index} className="col">
                <button
                  className="btn btn-outline-light w-100 py-3"
                  onClick={
                    btn === "="
                      ? calculateResult
                      : btn === "C"
                      ? clearInput
                      : () => handleInput(btn)
                  }
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {["0", ".", "C", "+"].map((btn, index) => (
              <div key={index} className="col">
                <button
                  className={`btn ${
                    btn === "C" ? "btn-danger" : "btn-outline-light"
                  } w-100 py-3`}
                  onClick={
                    btn === "="
                      ? calculateResult
                      : btn === "C"
                      ? clearInput
                      : () => handleInput(btn)
                  }
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
          <div className="row mt-2">
            <div className="col">
              <button
                className="btn btn-success w-100 py-3"
                onClick={calculateResult}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
