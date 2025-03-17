import React from "react";


const Container = ({ children }) => {
  return (
    <div className="container relative mx-auto grid grid-cols-7 backdrop-blur bg-white/10">
      {children}
    </div>
  );
};
export default Container;
