import React, { useState } from 'react';

function Popup({ isOpen, onClose }) {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [fileCount, setFileCount] = useState(0);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setDroppedFiles(files);
    setFileCount(files.length);
  };

  const handleFileInputChange = (e) => {
    const files = [...e.target.files];
    setDroppedFiles(files);
    setFileCount(files.length);
  };

  const handlePlay = (file) => {
    const audioURL = URL.createObjectURL(file);
    const audio = new Audio(audioURL);
    audio.play();
  };

  const handleDelete = (fileIndex) => {
    const updatedFiles = droppedFiles.filter((file, index) => index !== fileIndex);
    setDroppedFiles(updatedFiles);
    setFileCount(updatedFiles.length);
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>Close</button>
          <h2>VoiceLab</h2>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group card-upload" onDragOver={handleDragOver} onDrop={handleDrop}>
                  <div className="upload-container">
                    <label htmlFor="audio" className="upload-label">Click to upload a file or drag and drop</label>
                    <input type="file" id="audio" name="audio" accept=".mp3,.wav" multiple style={{ display: 'none' }} onChange={handleFileInputChange} />
                    <p>--------- OR ---------</p>
                    <button className="record-audio-button">Record audio</button>
                  </div>
                </div>
                <div className="file-counter">Samples: {fileCount}/10</div>
              </form>
            </div>
          </div>
          {droppedFiles.length === 0 && (
            <div className="no-files-message">No items uploaded yet. Upload audio samples of the voice you would like to clone.</div>
          )}
          {droppedFiles.length > 0 && (
            <div className="dropped-files">
              <h3>Dropped Files:</h3>
              <ul>
                {droppedFiles.map((file, index) => (
                  <li key={index}>
                    {file.name}
                    <button onClick={() => handlePlay(file)}><span role="img" aria-label="Play">&#9654;</span></button>
                    <button onClick={() => handleDelete(index)}><span role="img" aria-label="Delete">&#128465;</span></button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="condition">
          <p>
            Sample quality is more important than quantity. Noisy samples may give bad results.
            Providing more than 5 minutes of audio in total brings little improvement.
          </p>

          </div>
          
          <div className="acceptance-checkbox">
            <input type="checkbox" id="accept" required />
            <label htmlFor="accept">I hereby confirm that I have all necessary rights or consents to upload and clone these voice samples and that I will not use the platform-generated content for any illegal, fraudulent, or harmful purpose. I reaffirm my obligation to abide by Power ai’s Terms of Service and Privacy Policy.</label>
          </div>
          <div className="button-group">
            <button className="add-voice-button" type="submit">+ Add voice</button>
            <button className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;





