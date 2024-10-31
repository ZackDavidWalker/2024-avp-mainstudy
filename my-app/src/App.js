import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="App">
        <h2 className="thank-you-message">Thank you for your response</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Our React Site!</h2>
        <p>This is a simple React application with interactive elements.</p>
        
        <div className="video-container">
          <video width="320" height="240" controls>
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p>Please let us know what you think about this site below:</p>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your response here..."
            rows="4"
            cols="50"
            className="text-area"
          ></textarea>
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;