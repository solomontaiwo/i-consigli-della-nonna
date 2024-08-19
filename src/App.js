import React, { useState } from "react";
import "./App.css";

function App() {
  const phrases = [
    "The early bird catches the worm.",
    "A journey of a thousand miles begins with a single step.",
    "Better late than never.",
    "Actions speak louder than words.",
    "Every cloud has a silver lining.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);

  const handleClick = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowNextButton(true);
  };

  const handleNextPhrase = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
  };

  return (
    <div className="container">
      <h1>I Consigli della Nonna</h1>
      {!showNextButton && (
        <button onClick={handleClick}>Fatti consigliare</button>
      )}
      {showNextButton && (
        <>
          <p className="phrase">{currentPhrase}</p>
          <button onClick={handleNextPhrase}>Altro consiglio</button>
        </>
      )}
    </div>
  );
}

export default App;
