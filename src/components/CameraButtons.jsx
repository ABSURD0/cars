import state from "../state";

const style = {
  zIndex: 5,
  position: "absolute",
  bottom: "2vh",
  padding: "20px",

  textAlign: "center",
  borderRadius: "30%",
  fontSize: "2rem",
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
  background: "lightblue",
  color: "darkblue",
};

const CameraButtons = ({}) => {
  const sets = {
    // model_3
    1: {
      cameraPos: [15, 2, 4],
      target: [4, 0, 0],
      name: "Capot001_CAR_PAINT_0",
    },
    // model_s
    2: {
      cameraPos: [-18, 2, 5],
      target: [-3, 0, 0],
      name: "object005_bod_0",
    },
  };

  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        onClick={(e) => handleClick(2)}
        style={{
          left: "10vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{
          right: "10vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
