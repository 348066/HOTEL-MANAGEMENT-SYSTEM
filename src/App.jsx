
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import App1 from './components/App1.jsx';
import Viewk from './components/Viewk.jsx';
import { Route, Routes,useLocation,Router} from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/Home.jsx';
import PaymentForm from './components/Bokk.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import NavbarCopy from './components/NavbarCopy.jsx';
import AddRoom from './components/AddRoom.jsx';
import AddHotel from './components/AddHotel.jsx';
import RoomList from './components/RoomList.jsx';
import HotelBooking from './components/HotelBooking.jsx';
import ReviewSystem from './components/ReviewSystem.jsx';
import Contact from './components/Contact.jsx';
import BookingList from './components/BookingList.jsx';
import Adminlog from './components/Adminlog.jsx';
import Cards from './components/cards.jsx';




function App() {
const location=useLocation();
  return (
    <div>


  <Routes>


<Route path='/' element={<HomePage/>}/>
 <Route path='/view' element={<Viewk/>}/>
 <Route path='/pay' element={<PaymentForm/>}/>
 <Route path='/plug' element={<Login/>}/>
 <Route path='/register' element={<Register/>}/>
 <Route path='/loop1' element={<NavbarCopy/>}/>
 <Route path='/loop' element={<Adminlog/>}/>
 <Route path='/loop2' element={<Cards/>}/>


 <Route path='/AddHotel' element={<AddHotel/>}/>
 <Route path='/AddRoom' element={<AddRoom/>}/>
 <Route path='/RoomList' element={<RoomList/>}/>
 <Route path='/BookList' element={<BookingList/>}/>
 <Route path='/Roombooking' element={<HotelBooking/>}/>
 <Route path='/review' element={<ReviewSystem/>}/>
 <Route path='/contact' element={<Contact/>}/>
</Routes>




    </div>
  )
}




export default App;
