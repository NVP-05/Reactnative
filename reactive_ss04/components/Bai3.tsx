import React, { useState } from "react";

export default function Bai3() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isOn ? "#FFFBEA" : "#2E2E2E",
      }}
    >
      <div style={{ fontSize: "150px", color: isOn ? "gold" : "gray" }}>
        {isOn ? "💡" : "💡"}
      </div>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          marginTop: "30px",
          padding: "12px 30px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: isOn ? "#FF9800" : "#007AFF",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {isOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}
      </button>
    </div>
  );
}
