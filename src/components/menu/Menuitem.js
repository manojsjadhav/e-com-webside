import React from 'react'
import data from "../../db"
import "./Menuitem.css"

const Menuitem = () => {
  return (
    <div>
        {
            data.map((item)=>{
                return(
                    <div><img className='foodimg' src={item.imgdata} alt="foodImg"/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Menuitem