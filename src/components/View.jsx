import { colors } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

export const View = (props) => {
 
    const{Roomimage,category,Button}=props.view1
  return (
   
     
    <div className="main">
       
        <h1>Book Rooms</h1>
        
        <div>
            <img src={Roomimage} alt=""/>
        </div>
        <div>
            <p>{category}</p>
        </div>

<div>  
<p>{Button}</p>
</div>
    </div>
   
  )
}




export default View;