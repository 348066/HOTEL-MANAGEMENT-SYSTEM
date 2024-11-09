import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const Viewk = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Roombooking'); // Navigate to the payment page
  };

  const [item1, setItems] = useState([
    {
      id: 1,
      Roomimage: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Royal",
      description: "Luxurious royal room with a king-size bed.",
      totalRooms: 5,
      price: "RS4000",
      hotelName: "Grand Royal Hotel"
    },
    {
      id: 2,
      Roomimage: "https://img.freepik.com/premium-photo/hotel-room-with-bed-chandelier_865967-1216338.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid",
      category: "Royal",
      description: "Luxurious royal room with a king-size bed.",
      totalRooms: 3,
      price: "RS4500",
      hotelName: "Grand Royal Hotel"
    },
    {
      id: 3,
      Roomimage: "https://img.freepik.com/free-photo/modern-bedroom-interior-with-large-bed-bookshelf-large-window-wood-floors_9975-33145.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid",
      category: "Royal",
      description: "Luxurious royal room with a king-size bed.",
      totalRooms: 5,
      price: "RS5700",
      hotelName: "Grand Royal Hotel"
    },
    {
      id: 4,
      Roomimage: "https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Classy",
      description: "Elegant design with cozy ambiance.",
      totalRooms: 10,
      price: "RS5000",
      hotelName: "Classy Inn"
    },
    {
      id: 5,
      Roomimage: "https://img.freepik.com/premium-photo/best-luxury-motel_1165411-8180.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid",
      category: "Luxury",
      description: "High-end luxury suite with breathtaking views.",
      totalRooms: 3,
      price: "RS3500",
      hotelName: "Luxury Paradise"
    },
    {
      id: 6,
      Roomimage: "https://images.pexels.com/photos/18946618/pexels-photo-18946618/free-photo-of-modern-house-with-the-view-of-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Heavenly",
      description: "Heavenly room with private balcony.",
      totalRooms: 4,
      price: "RS3000",
      hotelName: "Heavenly Resort"
    },
    {
      id: 7,
      Roomimage: "https://cdn.create.vista.com/api/media/small/394337454/stock-photo-rendering-luxury-bedroom-suite-resort-high-rise-hotel-twin-bed",
      category: "Twin Bed",
      description: "Comfortable twin bed room for two.",
      totalRooms: 2,
      price: "RS6000",
      hotelName: "Budget Stay"
    },
    {
      id: 8,
      Roomimage: "https://img.freepik.com/premium-photo/luxury-hotel-room-with-twin-beds-warm-lighting_490636-5794.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid",
      category: "Twin Bed",
      description: "Comfortable twin bed room for two.",
      totalRooms: 3,
      price: "RS5000",
      hotelName: "Budget Stay"
    },
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtered items based on search query
  const filteredItems = item1.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <Navbar />
      
      {/* Search Bar */}
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <TextField
          label="Search by Category, Hotel Name, or Price"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: '50%' }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{
            margin: '10px',
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            flex: '0 1 calc(50% - 20px)',
            boxSizing: 'border-box'
          }}>
            <img data-aos='flip-up' src={item.Roomimage} alt={item.category} style={{
              width: '100%', 
              height: 'auto',
              borderRadius: '15px'
            }} />
            <h3 style={{ fontWeight: 'bold' }}>{item.category}</h3>
            <p>{item.description}</p>
            <p>{item.hotelName}</p>
            <p><strong>Total Rooms:</strong> {item.totalRooms}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Book
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewk;