import React from "react";
import { useState, useEffect } from "react";

const Audio = ({ src, play }) => {
  const soundFile = require(`${src}`); // Load audio file using the src prop
  const audioPLayer = React.useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to keep track of whether the audio is playing or not
  console.log(play)
  useEffect(() => {
    if (play) {
      playAudio();
    }
  }, [play]);

  // Function to play the audio
  const playAudio = () => {
    audioPLayer.current.play();
    setIsPlaying(true);
  };

  // Function to stop the audio
  const stopAudio = () => {
    audioPLayer.current.pause();
    audioPLayer.current.currentTime = 0;
    setIsPlaying(false);
  };
  return (
    <div className="App">
      {/* Important!!! */}
      {/* KEY here is very important. It is used to re-render the component when the src prop changes.
      Otherwise The browser is not recognising any changes React makes to the src prop and will not re-render the component. */}
      <audio controls key={src} ref={audioPLayer}>
        <source
          src={soundFile}
          type="audio/wav"
        />
      </audio>
    </div>
  );
};

export default Audio;
