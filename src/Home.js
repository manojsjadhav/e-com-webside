import React, { useState } from "react";
import Catnavbar from "./components/catnavbar/Catnavbar";
import Menuitem from "./components/menu/Menuitem";
import data from "./db"

const Home = () => {
    const [menuitem,setMenuItem] = useState(data)
    const [category, setCategory] = useState("All")

    const categoryHandal  = (cat)=>{
        setCategory(cat)
        const filterarr = cat ==='All'? data : data.filter((item)=>{
            return item.category.includes(cat)
        })
        setMenuItem(filterarr)
    }


  return (
    <>
      <Catnavbar categoryHandal={categoryHandal} category={category} />
      <Menuitem  menuitem={menuitem}/>
    </>
  );
};

export default Home;
