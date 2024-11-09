import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App1  ()  {


  const navigate = useNavigate();
  const handleClick = () => {
      //alert(`You clicked on ${item2.category}`);
      navigate('/view'); // Replace '/target-page' with your desired route
  };
  
useEffect(()=>{
  AOS.init({duration:3000,})
},[]);

  let messege=""
const time=new Date().getHours();
console.log(time);
if (time<12){
  messege="Morning"
}
else if(time<16){
  messege="Afternoom"

}
else
{
  messege="Evening"
}
  return (
    <div className='mainn'>
        <h1 data-aos='flip-down'>Hello, React!</h1>
        <h2>{`Good ${messege} Team`}</h2>
        <img data-aos='fade-up' src="https://renderatelier.com/wp-content/uploads/2019/06/Cam_04_Final.jpg" alt="Description of image" style={{ width: '1000px', height: '500px', borderRadius: '15px' ,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <div>
        {/* <Button variant="contained" color="primary" onClick={handleClick}>
            Click Me
        </Button> */}
        </div>
    </div>
  )
}

export default App1;
