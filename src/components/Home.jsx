
import React,{ useEffect } from 'react';
import gif from './pool-with-palm-trees-sides.jpg'
import { useNavigate } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';



const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/loop2'); 
  };

  return (
    <div>
      <Navbar/>
    <div style={styles.container}>
      <div style={styles.text} data-aos="flip-down" >
        <h1 style={styles.header} data-aos="fade-up">Book Your Hole Trip With us</h1>
 
        <button style={styles.loginButton} onClick={handleLoginClick}>
          Explore Here
        </button>
      </div>
     
    </div>
    </div>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${gif})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    position: 'relative',
    textAlign: 'center', 
  },
  text: {
    position: 'absolute', 
    top: '50%',            
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    textAlign: 'center', 
    
    color: 'white', 
    padding: '20px', 
    maxWidth: '80%', 
    boxSizing: 'border-box',
  },
  header: {
    fontSize: '2.5em',
   //marginBottom: '20px',
    marginTop:'20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
  },
  description: {
    fontSize: '1.2em',
    maxWidth: '600px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', 
    marginBottom: '30px', 
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '1em',
    color: 'white',
    backgroundColor: '#12646e', 
    border: 'none',
    // borderRadius: '20px',
    width:'150px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    
  },
};


export default HomePage;



