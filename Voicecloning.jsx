import React, { useState } from 'react';
import Popup from './Popup';

function VoiceCloning() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCloneVoice = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="voice-cloning-container">
      <h3>Let AI create your voice-overs for you</h3>
      <div className="voice">
      <p>With Fliki's voice cloning, record two minutes of your voice, then generate any number of voice-overs in your own voice with just text.</p>
      <p>Please read the terms and conditions for using the voice cloning feature <a href="#">here</a>.</p>
      </div>
      <button className="clone-voice-button" onClick={handleCloneVoice}>Clone voice</button>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default VoiceCloning;

