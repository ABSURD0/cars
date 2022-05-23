import React, { createContext, useState } from "react";
export const SampleContext = createContext();
const ContextProvider = (props) => {
  let [enableOrbit, setEnableOrbit] = useState(false);
  return (
    <SampleContext.Provider value={{ enableOrbit, setEnableOrbit }}>
      {" "}
      {props.children}{" "}
    </SampleContext.Provider>
  );
};
export default ContextProvider;
