import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableHead,
    Button,
} from '@mui/material';
import NavbarCopy from './NavbarCopy';
import axios from 'axios'; 
//import './BookingList.css'; // Optional CSS for your styling

const BookingList = () => {
    const [bookings, setBookings] = useState([]); // State to store booking data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for potential errors

    // Fetch booking data from backend API
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('https://localhost:7010/api/BookingDtl/Showbookinglist'); // Adjust URL based on your actual endpoint
                setBookings(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch bookings.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []); // Empty dependency array to run once on component mount

    if (loading) {
        return <Typography variant="h6" align="center">Loading...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" align="center" color="error">{error}</Typography>;
    }

    return (
        <div>
            <NavbarCopy />
            <Container className="container">
                <Typography variant="h4" gutterBottom align="center">
                    Booking List
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Check-In Date</TableCell>
                                <TableCell>Check-Out Date</TableCell>
                                <TableCell>Total Rooms</TableCell>
                                <TableCell>Total Amount</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking) => (
                                <TableRow key={booking.id}>
                                    <TableCell>{booking.id}</TableCell>
                                    <TableCell>{booking.customerName}</TableCell>
                                    <TableCell>{booking.customerContact}</TableCell>
                                    <TableCell>{new Date(booking.checkInDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{new Date(booking.checkOutDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{booking.totalRooms}</TableCell>
                                    <TableCell>{booking.totalAmount}</TableCell>
                                    <TableCell>
                                        {/* <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
                                            Edit
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Delete
                                        </Button> */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default BookingList;
