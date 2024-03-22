import React from "react";

export default function EasyOverview() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Leistungsstand in Lesekompetenz</h1>
      <div className="skill" style={skillStyle}>
        <div className="skill-title">Worterkennung</div>
        <div className="progress-bar" style={progressBarStyle}>
          <div className="progress" style={progressStyle}></div>
        </div>
        <div className="progress-text">Gut</div>
      </div>
      <div className="skill" style={skillStyle}>
        <div className="skill-title">Verstehen von kurzen Texten</div>
        <div className="progress-bar" style={progressBarStyle}>
          <div className="progress" style={progressStyle}></div>
        </div>
        <div className="progress-text">Sehr gut</div>
      </div>
      <div className="skill" style={skillStyle}>
        <div className="skill-title">Flüssiges Lesen</div>
        <div className="progress-bar" style={progressBarStyle}>
          <div className="progress" style={progressStyle}></div>
        </div>
        <div className="progress-text">Befriedigend</div>
      </div>
      <div className="skill" style={skillStyle}>
        <div className="skill-title">Leseverständnis</div>
        <div className="progress-bar" style={progressBarStyle}>
          <div className="progress" style={progressStyle}></div>
        </div>
        <div className="progress-text">Sehr gut</div>
      </div>
      <div className="conclusion" style={conclusionStyle}>
        Weiter so! Deine Fortschritte in der Lesekompetenz sind großartig. Bleib
        dran und du wirst noch viel mehr erreichen können!
      </div>
    </div>
  );
}

const containerStyle = {
  width: "80%",
  margin: "50px auto",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
};

const skillStyle = {
  marginBottom: "20px",
};

const progressBarStyle = {
  width: "100%",
  backgroundColor: "#ddd",
  height: "20px",
  borderRadius: "10px",
};

const progressStyle = {
  backgroundColor: "#4caf50",
  height: "100%",
  borderRadius: "10px",
};

const conclusionStyle = {
  textAlign: "center",
  marginTop: "30px",
  fontSize: "18px",
  color: "#333",
};
