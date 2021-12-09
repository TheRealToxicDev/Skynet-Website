import React from "react";
import "./App.css";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="https://images-ext-2.discordapp.net/external/CDD__AqgNMF6Gj2opQUeI0yeylqzYN2-Q5S5jIgtaWQ/https/cdn.discordapp.com/avatars/650872568374493185/871cbb7a223667dd3583c449286c10e5.webp" alt="Skynet" />
        <h1 style={{ color: "white", display: "inline", verticalAlign: "super" }}> Skynet</h1>
      </header>
      <Instructions />
      <div className="main">
        <h1 style={{ color: "Crimson" }}>Screenshot(s)</h1>
        <img
          className="screenshot"
          src="https://media.discordapp.net/attachments/734686866690932767/773765816410963999/image0.jpg"
          alt="Limits"
        />
        <img
          className="screenshot"
          src="https://media.discordapp.net/attachments/734686866690932767/773765935940239370/image0.png"
          alt="Limits"
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
