

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRoom.css'; // Import the CSS file
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper
} from '@mui/material';
import NavbarCopy from './NavbarCopy';
import axios from 'axios';

const AddRoom = ({ addRoom }) => {
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState({
    title: '',
    price: '',
    maxPeople: '',
    desc: '',
    roomNumbers: '',
    hotel: '',
    photo: null, // Field to store the uploaded photo
  });

  // Handle text field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({
      ...roomDetails,
      [name]: value
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setRoomDetails({
      ...roomDetails,
      photo: e.target.files[0], // Capture the uploaded file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data
    const addroomdata = {
           roomtitle:roomDetails.title,
        price:roomDetails.price,
     maxPeople:roomDetails.maxPeople,
      Discription:roomDetails.desc,
      roomnumber:roomDetails.roomNumbers,
       hotelname:roomDetails.hotel,
       photo: null,
      };
    try {
      // Post request to add room
      const response = await axios.post('https://localhost:7010/api/AddRoom/AddRooms', addroomdata);

      // Check the response for success
      if (response.status === 200) {
        alert('Room Added Successfully!!!');
        resetForm(); // Reset the form after submission
        // Optionally navigate to another page
        //navigate('/'); // Adjust to desired redirection
      } else {
        console.error('Failed to add room');
      }
    } catch (error) {
      console.error(error);
      // Handle backend validations or errors
      if (error.response) {
        alert('Failed to add room. Please try again.');
      } else {
        alert('An error occurred. Please check your network connection.');
      }
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setRoomDetails({
      title: '',
      price: '',
      maxPeople: '',
      desc: '',
      roomNumbers: '',
      hotel: '',
      photo: null, // Reset photo field as well
    });
    // if (fileInputRef.current) {
    //   fileInputRef.current.value = null; // Set file input value to null to clear the selection
    // }
  };

  return (
    <div>
      <NavbarCopy />
      <div className="background">
        <Container
          component={Paper}
          elevation={3}
          sx={{
            padding: 1,
            margin: 'auto',
            marginTop: '10%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '30%',
            maxWidth: '600px',
            height: 'auto',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Add New Room
          </Typography>
          <Box
            sx={{
              maxHeight: '400px',
              overflowY: 'auto',
              padding: '16px',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="title"
                  label="Room Title"
                  value={roomDetails.title}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#0d0d0c' },
                  }}
                  InputLabelProps={{
                    style: { color: '#0d0d0c' },
                  }}  
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="price"
                  label="Price"
                  type="number"
                  value={roomDetails.price}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#0d0d0c' },
                  }}
                  InputLabelProps={{
                    style: { color: '#0d0d0c' },
                  }}  
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="maxPeople"
                  label="Max People"
                  type="number"
                  value={roomDetails.maxPeople}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#0d0d0c' }
                  }}
                  InputLabelProps={{
                    style: { color: '#0d0d0c' }
                  }}  
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="desc"
                  label="Room Description"
                  multiline
                  rows={4}
                  value={roomDetails.desc}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#0d0d0c' }
                  }}
                  InputLabelProps={{
                    style: { color: '#0d0d0c' }
                  }}  
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="roomNumbers"
                  label="Room Numbers"
                  placeholder="Comma separated room numbers (e.g., 101, 102, 103)"
                  value={roomDetails.roomNumbers}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#0d0d0c' },
                  }}
                  InputLabelProps={{
                    style: { color: '#0d0d0c' },
                  }}  
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="hotel"
                  label="Hotel"
                  placeholder="Enter Hotel Name or ID"
                  value={roomDetails.hotel}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#0d0d0c' },
                  }}
                  InputLabelProps={{
                    style: { color: '#0d0d0c' },
                  }}  
                />
              </Box>
              {/* Add Photo Upload Field */}
              <Box mb={2}>
                <input
                  accept="image/*"   // Accept image file types only
                  type="file"
                  onChange={handleFileChange}
                  required    // Mark it as a required field if you want
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add Room
              </Button>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default AddRoom;