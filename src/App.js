import React from "react";
import "./App.css";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="https://media.discordapp.net/attachments/734686866690932767/773768521544105985/imageedit_2_5944678009.png" alt="Skynet" />
        <h1 style={{ color: "white", display: "inline", verticalAlign: "super" }}> Skynet</h1>
      </header>
      <Instructions />
      <div className="main">
        <img
          className="screenshot"
          src="https://media.discordapp.net/attachments/734686866690932767/773765816410963999/image0.jpg"
          alt="DMs Server Owner when Limits are met"
        />
      </div>
      <div style={{ color: "white" }} className="footer">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        ️ by
        <a
          href="https://github.com/TheRealToxicDev"
          target="_blank"
          rel="noopener noreferrer"
        >
           Toxic Dev
        </a>
      </div>
    </div>
  );
}

export default App;