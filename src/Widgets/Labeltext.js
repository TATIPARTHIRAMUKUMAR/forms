import React from "react";
import "./Labeltext.css";

export default function Labeltext({ inputdata, handleInputChange }) {
  return (
    <>
      {inputdata.type == "textfield" && (
        <div class="container">
          <label for="textfield">
            {inputdata.labelname}
            {inputdata.required && <span style={{ color: "red" }}>*</span>}
            <input
              type="text"
              id="textfield"
              placeholder={inputdata.placeholder}
              onChange={(e) => handleInputChange(e, inputdata.name)}
            ></input>
          </label>
        </div>
      )}
      {inputdata.type == "select" && (
        <div class="container">
          <label for="textfield">
            {inputdata.labelname}
            {inputdata.required && <span style={{ color: "red" }}>*</span>}
            <select
              type="text"
              id="textfield"
              placeholder={inputdata.placeholder}
              onChange={(e) => handleInputChange(e, inputdata.name)}
            >
              {inputdata.options.map((x) => {
                return <option value={x}>{x}</option>;
              })}
            </select>
          </label>
        </div>
      )}
      {inputdata.type == "checkbox" && (
        <div class="container1">
          <input
            type="checkbox"
            id="textfield"
            placeholder="Enter text"
            onChange={(e) => handleInputChange(e, inputdata.name)}
          ></input>
          {inputdata.required && <span style={{ color: "red" }}>*</span>}
          <label for="textfield">{inputdata.labelname}</label>
        </div>
      )}
    </>
  );
}
