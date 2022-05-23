import * as THREE from "three";
import state from "../state";
import { Color } from "three";

const sharedStyles = {
  padding: "1.08rem",
  borderRadius: "20px",
  cursor: "pointer",
  marginBottom: ".5rem",
};

const ColorPicker = (props) => {
  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new Color(e.target.style.background);
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",

        top: "0.5%",
        border: "1px solid black",
        borderRadius: "20px",
        padding: "0.2rem",
        background: "grey",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: "1rem",
        }}
      >
        CHOOSE YOUR COLOR
      </p>
      <div
        onClick={handleClick}
        style={{
          background: "rgb(243, 246, 247)",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "black",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "red",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "rgb(30, 75, 93)",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "#000d89",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "#175421",
          ...sharedStyles,
        }}
      />
    </div>
  );
};

export default ColorPicker;
