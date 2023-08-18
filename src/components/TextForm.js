import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newUpperText = text.toUpperCase();
    setText(newUpperText);
    props.showAlert(" Converted to Upper Case!", "success");
  };

  const handleLwClick = () => {
    let newLowerText = text.toLowerCase();
    setText(newLowerText);
    props.showAlert(" Converted to Lower Case!", "success");

  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Cleared text!", "warning");

  };

  const handleCopy =() =>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="my-3 mb-3">
        <h1 className={`p-1 bg-opacity-10 text-${props.mode==='light'?'dark':'light'}`}>
          {props.heading}
        </h1>
        <textarea
          className={`form-control ${props.mode==='light'? `bg-light`: `bg-secondary`}`}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className={`my-1 btn btn-${props.mode==="light"?"primary":"dark"} mx-2`} onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className={`my-1 btn btn-${props.mode==="light"?"primary":"dark"} mx-2`} onClick={handleLwClick}>
        Convert to LowerCase
      </button>
      <button className={`my-1 btn btn-${props.mode==="light"?"primary":"dark"} mx-2`} onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button
        className={`my-1 btn btn-${props.mode==="light"?"primary":"dark"} mx-2`}
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <div className="container my-3 ">
        <h1 className={`h4 pb-2 mb-4 text-${props.mode==='light'?'dark':'light'}`}>
          Your Text Summary
        </h1>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>
          <b>{text.split(" ").length - 1}</b> Words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>
          <b>{0.008 * (text.split(" ").length - 1)}</b> Minutes take to read
        </p>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};
