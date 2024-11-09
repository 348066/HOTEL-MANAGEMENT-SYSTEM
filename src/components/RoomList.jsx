

// import React, { useEffect, useState } from 'react';
// import {
//     Container,
//     Typography,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableRow,
//     Paper,
//     TableHead,
//     Button,
// } from '@mui/material';
// import NavbarCopy from './NavbarCopy';
// import axios from 'axios'; // Import axios for making requests
// import './RoomList.css'; // Import your CSS file

// const RoomList = () => {
//     const [rooms, setRooms] = useState([]); // State to store room data
//     const [loading, setLoading] = useState(true); // State to track loading status
//     const [error, setError] = useState(null); // State to store potential errors

//     // Fetch room data from backend API
//     useEffect(() => {
//         const fetchRooms = async () => {
//             try {
//                 const response = await axios.get('https://localhost:7010/api/AddRoom/Showrooomlist'); // Adjust URL based on your actual endpoint
//                 setRooms(response.data);
//             } catch (err) {
//                 console.error(err);
//                 setError('Failed to fetch rooms.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRooms();
//     }, []); // Empty dependency array to run once on component mount

//     if (loading) {
//         return <Typography variant="h6" align="center">Loading...</Typography>;
//     }

//     if (error) {
//         return <Typography variant="h6" align="center" color="error">{error}</Typography>;
//     }

//     return (
//         <div>
//             <NavbarCopy />
//             <Container className="container">
//                 <Typography variant="h4" gutterBottom align="center">
//                     Room List
//                 </Typography>
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>ID</TableCell>
//                                 <TableCell>Title</TableCell>
//                                 <TableCell>Price</TableCell>
//                                 <TableCell>Max People</TableCell>
//                                 <TableCell>Description</TableCell>
//                                 <TableCell>roomnumber</TableCell>
//                                 <TableCell>hotelname</TableCell>
//                                 <TableCell>Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rooms.map((room) => (
//                                 <TableRow key={room.id}>
//                                     <TableCell>{room.id}</TableCell>
//                                     <TableCell>{room.roomtitle}</TableCell>
//                                     <TableCell>{room.price}</TableCell>
//                                     <TableCell>{room.maxpeople}</TableCell>
//                                     <TableCell>{room.discription}</TableCell>
//                                     <TableCell>{room.roomnumber}</TableCell>
//                                     <TableCell>{room.hotelname}</TableCell>
//                                     <TableCell>
//                                         <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
//                                             Edit
//                                         </Button>
//                                         <Button variant="contained" color="secondary">
//                                             Delete
//                                         </Button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Container>
//         </div>
//     );
// };

// export default RoomList;

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
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';
import NavbarCopy from './NavbarCopy';
import axios from 'axios'; 
import './RoomList.css'; 

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentRoom, setCurrentRoom] = useState(null);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('https://localhost:7010/api/AddRoom/Showrooomlist');
            setRooms(response.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch rooms.');
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (room) => {
        setCurrentRoom(room);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setCurrentRoom(null);
    };

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete(`https://localhost:7010/api/AddRoom/${id}`);
            fetchRooms(); // Refresh the room list after deletion
        } catch (err) {
            console.error(err);
            alert('Failed to delete room.');
        }
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put(`https://localhost:7010/api/AddRoom/${currentRoom.id}`, currentRoom);
            fetchRooms(); // Refresh the room list after updating
            handleDialogClose(); // Close the dialog
        } catch (err) {
            console.error(err);
            alert('Failed to save changes.');
        }
    };

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
                    Room List
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Max People</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Room Number</TableCell>
                                <TableCell>Hotel Name</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rooms.map((room) => (
                                <TableRow key={room.id}>
                                    <TableCell>{room.id}</TableCell>
                                    <TableCell>{room.roomtitle}</TableCell>
                                    <TableCell>{room.price}</TableCell>
                                    <TableCell>{room.maxpeople}</TableCell>
                                    <TableCell>{room.discription}</TableCell>
                                    <TableCell>{room.roomnumber}</TableCell>
                                    <TableCell>{room.hotelname}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => handleEditClick(room)} style={{ marginRight: 8 }}>
                                            Edit
                                        </Button>
                                        <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(room.id)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            {/* Dialog for editing room details */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Edit Room Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit room details, modify the fields below and click 'Save'.
                    </DialogContentText>
                    {currentRoom && (
                        <>
                            <TextField
                                margin="dense"
                                label="Room Title"
                                type="text"
                                fullWidth
                                value={currentRoom.roomtitle}
                                onChange={(e) => setCurrentRoom({ ...currentRoom, roomtitle: e.target.value })}
                            />
                            <TextField
                                margin="dense"
                                label="Price"
                                type="number"
                                fullWidth
                                value={currentRoom.price}
                                onChange={(e) => setCurrentRoom({ ...currentRoom, price: e.target.value })}
                            />
                            <TextField
                                margin="dense"
                                label="Max People"
                                type="number"
                                fullWidth
                                value={currentRoom.maxpeople}
                                onChange={(e) => setCurrentRoom({ ...currentRoom, maxpeople: e.target.value })}
                            />
                            <TextField
                                margin="dense"
                                label="Description"
                                type="text"
                                fullWidth
                                value={currentRoom.Discription}
                                onChange={(e) => setCurrentRoom({ ...currentRoom, Discription: e.target.value })}
                            />
                            <TextField
                                margin="dense"
                                label="Room Number"
                                type="text"
                                fullWidth
                                value={currentRoom.roomnumber}
                                onChange={(e) => setCurrentRoom({ ...currentRoom, roomnumber: e.target.value })}
                            />
                            <TextField
                                margin="dense"
                                label="Hotel Name"
                                type="text"
                                fullWidth
                                value={currentRoom.hotelname}
                                onChange={(e) => setCurrentRoom({ ...currentRoom, hotelname: e.target.value })}
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveChanges} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default RoomList;