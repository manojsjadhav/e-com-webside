import React from "react";
import "./Catnavbar.css";

const Catnavbar = () => {
  const btnarr = ["All", "Brekfast", "Thali", "Veg", "Nonveg", "Cake"];
  return (
    <div className="containerbtn">
      {btnarr.map((item) => {
        return <button className="btn">{item}</button>;
      })}
    </div>
  );
};

export default Catnavbar;
