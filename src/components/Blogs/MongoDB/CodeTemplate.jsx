import React from "react";
import Code from "../Code";

const CodeTemplate = ({ heading, code }) => {
  return (
    <>
      <br />

      <h4 className="codeHeading">{heading}</h4>

      <Code code={`${code}`} />
    </>
  );
};

export default CodeTemplate;
