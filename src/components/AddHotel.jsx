
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Paper
} from '@mui/material';
import NavbarCopy from './NavbarCopy';
import './AddHotel.css';
import './Bokk.css'; // Importing the CSS file for styling
import axios from 'axios';

const AddHotel = ({ addHotel }) => {
  const navigate = useNavigate();
  const [hotelDetails, setHotelDetails] = useState({
    name: '',
    type: '',
    id: '',
    city: '',
    address: '',
    distance: '',
    title: '',
    desc: '',
    cheapestPrice: '',
    photos: '',
    featured: false,
    rooms: ''
  });

  const handleChange2 = (e) => {
    const { name, value, type, checked } = e.target;
    setHotelDetails({
      ...hotelDetails,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const addhoteldata = {
      hotelname: hotelDetails.name,
      hoteltype: hotelDetails.type,
      hotelid: hotelDetails.id,
      city: hotelDetails.city,
      address: hotelDetails.address,
      distance: hotelDetails.distance,
      title: hotelDetails.title,
      discription: hotelDetails.desc,
      cheapestprice: hotelDetails.cheapestPrice,
      numberofrooms: hotelDetails.rooms,
      photos: hotelDetails.photos.split(',').map(url => url.trim()), // Convert to an array if needed.
      featured: hotelDetails.featured
    };

    try {
      // Await the add hotel post request
      const response = await axios.post('https://localhost:7010/api/AddHotel/AddHotel', addhoteldata);

      // Check the response for success
      if (response.status === 200) {
        alert('Hotel Added Successfully!!!');
        resetForm(); // Reset the form after submission
        // Optionally navigate to another page
        // navigate('/');
      } else {
        console.error('Failed to add hotel');
      }
    } catch (error) {
      console.error(error);
      // Handle backend validations or errors
      if (error.response) {
        alert('Failed to add hotel. Please try again.');
      } else {
        alert('An error occurred. Please check your network connection.');
      }
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setHotelDetails({
      name: '',
      type: '',
      id: '',
      city: '',
      address: '',
      distance: '',
      title: '',
      desc: '',
      cheapestPrice: '',
      photos: '',
      featured: false,
      rooms: ''
    });
  };

  return (
    <div>
      <NavbarCopy />
      <div className='background-image'>
        <Container
          component={Paper}
          elevation={3}
          sx={{
            padding: 2,
            marginTop: -4,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Mostly opaque
            width: '30%',
            maxWidth: '600px', // Adjust this as needed for a wider form
            maxHeight: '130vh', // Set maximum height
            overflowY: 'auto', // Enable vertical scroll if needed
            borderRadius: '15px',
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Add New Hotel
          </Typography>
          <form onSubmit={handleSubmit2}>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="name" label="Hotel Name" value={hotelDetails.name} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="type" label="Hotel Type" value={hotelDetails.type} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="id" label="Hotel Id " value={hotelDetails.id} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="city" label="City" value={hotelDetails.city} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="address" label="Address" value={hotelDetails.address} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="distance" label="Distance (km)" type="number" value={hotelDetails.distance} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="title" label="Title" value={hotelDetails.title} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="desc" label="Description" multiline rows={4} value={hotelDetails.desc} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="cheapestPrice" label="Cheapest Price" type="number" value={hotelDetails.cheapestPrice} onChange={handleChange2} required />
            </Box>
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="photos" label="Photos (comma separated URLs)" value={hotelDetails.photos} onChange={handleChange2} required />
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="featured"
                  checked={hotelDetails.featured}
                  onChange={handleChange2}
                />
              }
              label="Featured"
            />
            <Box mb={2}>
              <TextField fullWidth variant="outlined" name="rooms" label="Number of Rooms" type="number" value={hotelDetails.rooms} onChange={handleChange2} required />
            </Box>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Hotel
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default AddHotel;