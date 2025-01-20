import React from "react";

function CardContainer({ children }) {
  return (
    <div className="container">
      <div className="row p-3 g-2 mb-4 justify-content-center ">{children}</div>
    </div>
  );
}

export default CardContainer;
