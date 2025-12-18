import React, { useState } from "react";
import MainApp from "./MainApp"; // Replace with your main app component

export default function Landing() {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return <MainApp />; // Show the main app after click
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Attendance App</h1>
      <p>Click the button below to enter the app</p>
      <button
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        onClick={() => setShowApp(true)}
      >
        Enter
      </button>
    </div>
  );
}
