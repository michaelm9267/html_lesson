import React from "react";
import htmlExample from "../images/htmlExample.png";

const Page3 = () => {
  return (
    <div>
      <div className="page3-cont">
        <h2 className="page3-title">HTML Example</h2>
        <div className="code-example-cont">
          <img src={htmlExample} className="code-example" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
