import * as React from "react";

export const Container = ({ children }) => {
  return (
    <div
      style={{
        width: "40%",
        backgroundColor: "#916cb4",
        textAlign: "center",
        margin: "auto",
        marginTop: "40px",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};
