import React from "react";
import Code from "../Code";

const CodeTemplate = ({ heading, code }) => {
  return (
    <>
      <br />

      <h4>{heading}</h4>

      <Code code={`${code}`} />
    </>
  );
};

export default CodeTemplate;
