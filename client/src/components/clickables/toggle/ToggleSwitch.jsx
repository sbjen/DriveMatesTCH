import React, { useState } from "react";
import "./toggleSwitch.css"

const ToggleSwitch = () => {
  return (
    <div class="tabs">
      <div class="switcher"></div>
      <div class="tab" data-active-color="#ffd609">
        Pending
      </div>
      
      <div class="tab" data-active-color="#46dc00">
        Approved
      </div>
      <div class="tab" data-active-color="#ff6d6d">
        Rejected
      </div>
    </div>
  );
};

export default ToggleSwitch;
