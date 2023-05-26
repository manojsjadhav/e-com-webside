import React from "react";
import "./Menuitem.css";

const Menuitem = ({menuitem}) => {
  return (
    <div className="item-container">
      {menuitem.map((item) => {
        return (
          <div className="product-div">
            <div>
              <img className="foodimg" src={item.imgdata} alt="foodImg" />
            </div>
            <h3>{item.proname}</h3>
            <p>price : {item.price}</p>
            <h4>rating : {item.rating}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Menuitem;
