import React from "react";
import "./Catnavbar.css";

const Catnavbar = ({categoryHandal,category}) => {
  const btnarr = ["All", "Breakfast", "Thali", "Veg", "Nonveg", "Cake"];
  return (
    <div className="containerbtn">
      {btnarr.map((item) => {
        return <button onClick={()=>categoryHandal(item)} className={category===item?"btn active":"btn"}>{item}</button>;
      })}
    </div>
  );
};

export default Catnavbar;
