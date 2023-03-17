import React from "react";
import { useState, useEffect } from "react";

const Audio = (src) => {
  
const soundFile = require("./Möchten Sie einen Kaffee.wav");
  return (
    <div className="App">
      <audio controls>
        <source
          src={soundFile}
          type="audio/wav"
        />
      </audio>
    </div>
  );
};

export default Audio;
