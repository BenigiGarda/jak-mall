import React, { useState } from "react";
import "./ProgressBar.css";
import { IoIosArrowForward } from "react-icons/io";
function ProgressBar({ active }: { active: number }) {
  let bullet_active = active;
  return (
    <div id="progress-bar">
      <div className="group-bullet">
        <div className={bullet_active >= 1 ? "bullet-active" : "bullet"}>1</div>
        <p className="bullet-text">Delivery</p>
      </div>
      <IoIosArrowForward
        size={30}
        color={bullet_active >= 2 ? "#ff8a00" : "#e5ccb4"}
      />
      <div className="group-bullet">
        <div className={bullet_active >= 2 ? "bullet-active" : "bullet"}>2</div>
        <p className="bullet-text">Payment</p>
      </div>
      <IoIosArrowForward
        size={30}
        color={bullet_active >= 3 ? "#ff8a00" : "#e5ccb4"}
      />
      <div className="group-bullet">
        <div className={bullet_active >= 3 ? "bullet-active" : "bullet"}>3</div>
        <p className="bullet-text">Finish</p>
      </div>
    </div>
  );
}

export default ProgressBar;
