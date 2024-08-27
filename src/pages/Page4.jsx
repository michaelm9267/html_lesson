import React from "react";
import htmlOutput from "../images/htmlOutput.png";

const Page4 = () => {
  return (
    <div>
      <div className="page4-cont">
        <h2 className="page4-title">HTML Output Example</h2>
        <div className="output-example-cont">
          <img src={htmlOutput} className="output-example" />
        </div>
      </div>
    </div>
  );
};

export default Page4;