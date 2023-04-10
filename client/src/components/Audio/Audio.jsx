import React from "react";
import { useState, useEffect } from "react";

const Audio = ({ src }) => {
  const soundFile = require(`${src}`); // Load audio file using the src prop
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
