import React from "react";

const Instructions = () => {
  return (
    <div className="instructions">
      <h1 style={{ color: "Crimson" }}>About Skynet</h1>
      <h3 style={{ color: "white" }}>
        Skynet sets Limits for all of the Admin based Audit Events that can be triggered.
        If a user reaches or exceeds the limits the bot will remove all their roles as long as it has the needed permissions.
      </h3>
      <h3 style={{ color: "white" }}>
        • <a href="https://help.toxicdev.me/discord/skynet/">Documentation</a>
      </h3>
      <h3 style={{ color: "white" }}>
        • <a href="https://discord.gg/kvgJbCg7Vs">Support</a>
      </h3>
      <h3 style={{ color: "white" }}>
        • <a href="https://discordapp.com/api/oauth2/authorize?client_id=650872568374493185&permissions=8&scope=bot">Invite</a>
      </h3>
      <h1 style={{ color: "Crimson" }}>Commands</h1>
      <h3 style={{ color: "white" }}>
      <code style={{ color: "Crimson" }}>sky.help</code> - Displays the Help Message
      </h3>
      <h3 style={{ color: "white" }}>
      <code style={{ color: "Crimson" }}>sky.limits</code> - Displays the Current Limits set for your Guild.
      </h3>
      <h3 style={{ color: "white" }}>
      <code style={{ color: "Crimson" }}>sky.recent</code> - Displays a List of Recent Events provide a User ID for Events relating to that User.
      </h3>
      <h3 style={{ color: "white" }}>
      <code style={{ color: "Crimson" }}>sky.reset</code> - Reset the Limits to Default Value provide no args for Help.
      </h3>
    </div>
  );
};

export default Instructions;
