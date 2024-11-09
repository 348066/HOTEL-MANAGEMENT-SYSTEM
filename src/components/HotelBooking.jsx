

import React, { useState, useEffect } from 'react';
import './HotelBooking.css';  // Import the CSS file
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

const HotelBooking = () => {
    const [bookingId, setBookingId] = useState('');  // Not currently used, consider removing
    const [customerName, setCustomerName] = useState('');
    const [customerContact, setCustomerContact] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [totalRooms, setTotalRooms] = useState(1);
    const [totalAmount, setTotalAmount] = useState('');
    const [bookingStatus, setBookingStatus] = useState('Pending');
    
    // Add a state to check if the user is registered
    const [isRegistered, setIsRegistered] = useState(false);
    
    const navigate = useNavigate();

    // Check user registration by making an API call
    const cotactb={
        customerContact: customerContact,
        customerName:customerName
    }
    const checkUserRegistration = async () => {
        try {
            const response = await axios.post('https://localhost:7010/api/BookingDtl/bookusercheck', cotactb);
            console.log('Response status:', response.status);
            if(response.status===200)
                {
                    const addbookData = {
                        customerName:customerName,
                        customerContact: customerContact,
                        checkInDate:checkInDate,
                        checkOutDate:checkOutDate,
                        totalRooms: Number(totalRooms),
                        totalAmount: parseFloat(totalAmount), // Ensure this is a float
                        //bookingStatus
                    };

                    try {
                        const response1 = await axios.post('https://localhost:7010/api/BookingDtl/Addbook', addbookData);
                        // Handle the response according to your API
                        console.log('Response status:', response1.status);
                        if(response1.status===200)
                        {
                            alert('Booking successful!');
                           navigate('/pay')
                        }
                        else
                        {
                            alert('Booking failed!');

                        }
                        // Reset form after successful booking
                        setBookingId('');
                        setCustomerName('');
                        setCustomerContact('');
                        setCheckInDate('');
                        setCheckOutDate('');
                        setTotalRooms(1);
                        setTotalAmount('');
                        setBookingStatus('Pending');
                    } catch (error) {
                        console.error('There was an error making the booking!', error);
                        alert('Booking failed. Please try again.'); // General error message
                    }
                        
                } 
                else
                {
                    alert('You must be registered to book a room. Please register first.'); // Show alert
                    navigate('/register'); // Navigate to the registration page
                }
            //console.error('Error checking registration status:', response.status);
            setIsRegistered(response.data.isRegistered);  // Assuming your API returns the status
        } catch (error) {
            console.error('Error checking registration status:', error);
        }
    };

    // useEffect(() => {
    //     if (customerContact && customerName) {
    //         checkUserRegistration(); // Check the registration status when the contact changes
    //     }
    // }, [customerContact]);

    const handleBooking = async (e) => {
        e.preventDefault();
        checkUserRegistration();
        //if(checkUserRegistration.data.status===200);
       
        // Check registration status before proceeding
        // if (!isRegistered) {
        //     alert('You must be registered to book a room. Please register first.'); // Show alert
        //     //navigate('/register'); // Navigate to the registration page
        //     return;
        // }
    };

    return (
        <div>
            <Navbar />
            <div className="booking-container">
                <form onSubmit={handleBooking} className="booking-form">
                    <h2>Hotel Booking</h2>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Customer Name:</label>
                            <input 
                                type="text" 
                                value={customerName} 
                                onChange={(e) => setCustomerName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Customer Contact:</label>
                            <input 
                                type="tel" 
                                value={customerContact} 
                                onChange={(e) => setCustomerContact(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Check-In Date:</label>
                            <input 
                                type="date" 
                                value={checkInDate} 
                                onChange={(e) => setCheckInDate(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Check-Out Date:</label>
                            <input 
                                type="date" 
                                value={checkOutDate} 
                                onChange={(e) => setCheckOutDate(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Total Rooms:</label>
                            <input 
                                type="number" 
                                value={totalRooms} 
                                onChange={(e) => setTotalRooms(e.target.value)} 
                                min="1" 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Total Amount:</label>
                            <input 
                                type="number" 
                                value={totalAmount} 
                                onChange={(e) => setTotalAmount(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Book Now
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default HotelBooking;

// import React, { useState, useEffect } from 'react';
// import './HotelBooking.css';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import axios from 'axios';

// const HotelBooking = () => {
//     const [customerName, setCustomerName] = useState('');
//     const [customerContact, setCustomerContact] = useState('');
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [totalRooms, setTotalRooms] = useState(1);
//     const [totalAmount, setTotalAmount] = useState('');
//     const [isRegistered, setIsRegistered] = useState(false);
    
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Check user registration on component mount or when customerContact/customerName changes
//         if (customerContact && customerName) {
//             checkUserRegistration();
//         }
//     }, [customerContact, customerName]);

//     const checkUserRegistration = async () => {
//         const contactData = {
//             customerContact,
//             customerName,
//         };
//         try {
//             const response = await axios.post('https://localhost:7010/api/BookingDtl/bookusercheck', contactData);
//             if (response.status === 200 && response.data.isRegistered) {
//                 setIsRegistered(true);
//             } else {
//                 alert('You must be registered to book a room. Please register first.');
//                 navigate('/register');
//             }
//         } catch (error) {
//             console.error('Error checking registration status:', error);
//         }
//     };

//     const handleBooking = async (e) => {
//         e.preventDefault();

//         // Check registration status first
//         if (!isRegistered) {
//             alert('You must be registered to book a room. Please register first.');
//             return;
//         }

//         // Validate dates
//         const checkIn = new Date(checkInDate);
//         const checkOut = new Date(checkOutDate);
//         if (checkOut <= checkIn) {
//             alert('Check-out date must be after check-in date.');
//             return;
//         }

//         const addbookData = {
//             customerName,
//             customerContact,
//             checkInDate,
//             checkOutDate,
//             totalRooms: Number(totalRooms),
//             totalAmount: parseFloat(totalAmount),
//         };

//         try {
//             const response = await axios.post('https://localhost:7010/api/BookingDtl/Addbook', addbookData);
//             alert('Booking successful!');
//             // Reset form after successful booking
//             setCustomerName('');
//             setCustomerContact('');
//             setCheckInDate('');
//             setCheckOutDate('');
//             setTotalRooms(1);
//             setTotalAmount('');
//         } catch (error) {
//             console.error('There was an error making the booking!', error);
//             alert('Booking failed. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="booking-container">
//                 <form onSubmit={handleBooking} className="booking-form">
//                     <h2>Hotel Booking</h2>
//                     <div className="input-row">
//                         <div className="input-group">
//                             <label>Customer Name:</label>
//                             <input 
//                                 type="text" 
//                                 value={customerName} 
//                                 onChange={(e) => setCustomerName(e.target.value)} 
//                                 required 
//                             />
//                         </div>
//                         <div className="input-group">
//                             <label>Customer Contact:</label>
//                             <input 
//                                 type="tel" 
//                                 value={customerContact} 
//                                 onChange={(e) => setCustomerContact(e.target.value)} 
//                                 required 
//                             />
//                         </div>
//                     </div>
//                     <div className="input-row">
//                         <div className="input-group">
//                             <label>Check-In Date:</label>
//                             <input 
//                                 type="date" 
//                                 value={checkInDate} 
//                                 onChange={(e) => setCheckInDate(e.target.value)} 
//                                 required 
//                             />
//                         </div>
//                         <div className="input-group">
//                             <label>Check-Out Date:</label>
//                             <input 
//                                 type="date" 
//                                 value={checkOutDate} 
//                                 onChange={(e) => setCheckOutDate(e.target.value)} 
//                                 required 
//                             />
//                         </div>
//                     </div>
//                     <div className="input-row">
//                         <div className="input-group">
//                             <label>Total Rooms:</label>
//                             <input 
//                                 type="number" 
//                                 value={totalRooms} 
//                                 onChange={(e) => setTotalRooms(e.target.value)} 
//                                 min="1" 
//                                 required 
//                             />
//                         </div>
//                         <div className="input-group">
//                             <label>Total Amount:</label>
//                             <input 
//                                 type="number" 
//                                 value={totalAmount} 
//                                 onChange={(e) => setTotalAmount(e.target.value)} 
//                                 required 
//                             />
//                         </div>
//                     </div>
//                     <Button type="submit" variant="contained" color="primary">
//                         Book Now
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default HotelBooking;


