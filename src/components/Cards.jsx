
// import React from 'react';
// import './Cards.css'; // Make sure you have a CSS file for styles

// const hotelRooms = [
//   { id: 1, name: "Luxury Suite", description: "Experience the elegance of this spacious luxury suite.", image: "https://via.placeholder.com/300", emoji: "🏨" },
//   { id: 2, name: "Ocean View Room", description: "Relax with a stunning view of the ocean.", image: "https://via.placeholder.com/300", emoji: "🌊" },
//   { id: 3, name: "Presidential Suite", description: "Indulge in the utmost luxury with our Presidential Suite.", image: "https://via.placeholder.com/300", emoji: "👑" },
//   { id: 4, name: "Honeymoon Suite", description: "A romantic escape perfect for newlyweds.", image: "https://via.placeholder.com/300", emoji: "❤️" },
//   { id: 5, name: "Mountain View Room", description: "Enjoy breathtaking views of the mountains.", image: "https://via.placeholder.com/300", emoji: "🏔️" },
//   { id: 6, name: "Garden View Suite", description: "A serene garden view to relax and unwind.", image: "https://via.placeholder.com/300", emoji: "🌷" },
//   { id: 7, name: "Family Suite", description: "Spacious accommodation for the whole family.", image: "https://via.placeholder.com/300", emoji: "👨‍👩‍👧‍👦" },
//   { id: 8, name: "Spa Retreat Room", description: "Pamper yourself in our exclusive spa room.", image: "https://via.placeholder.com/300", emoji: "💆‍♀️" },
//   { id: 9, name: "Penthouse Suite", description: "Luxury at its finest in the penthouse suite.", image: "https://via.placeholder.com/300", emoji: "✨" },
//   { id: 10, name: "Romantic Suite", description: "Perfect for a romantic getaway.", image: "https://via.placeholder.com/300", emoji: "💕" },
//   { id: 11, name: "Business Executive Room", description: "Ideal for business travelers seeking comfort.", image: "https://via.placeholder.com/300", emoji: "💼" },
//   { id: 12, name: "Standard Double Room", description: "Comfortable double room for an affordable stay.", image: "https://via.placeholder.com/300", emoji: "🛏️" },
//   { id: 13, name: "Deluxe King Room", description: "Opulent living with a king-size bed.", image: "https://via.placeholder.com/300", emoji: "👑" },
//   { id: 14, name: "Eco-Friendly Room", description: "Stay green in our eco-friendly accommodations.", image: "https://via.placeholder.com/300", emoji: "🌱" },
//   { id: 15, name: "Budget Room", description: "Affordable accommodation with all essentials.", image: "https://via.placeholder.com/300", emoji: "💰" },
//   { id: 16, name: "Queen Suite", description: "Stylish and comfortable queen-size suite.", image: "https://via.placeholder.com/300", emoji: "👸" },
//   { id: 17, name: "Luxe Apartment", description: "A lavish apartment for longer stays.", image: "https://via.placeholder.com/300", emoji: "🏢" },
//   { id: 18, name: "Couples Retreat Room", description: "A cozy space for couples to escape.", image: "https://via.placeholder.com/300", emoji: "❤️" },
//   { id: 19, name: "Luxury Villa", description: "A private villa experience with luxury amenities.", image: "https://via.placeholder.com/300", emoji: "🏝️" },
//   { id: 20, name: "Skyline Room", description: "Enjoy stunning skyline views from this modern room.", image: "https://via.placeholder.com/300", emoji: "🌆" },
//   { id: 21, name: "Historical Suite", description: "Experience the charm of our historical suite.", image: "https://via.placeholder.com/300", emoji: "🏛️" },
//   { id: 22, name: "Royal Suite", description: "A majestic room fit for royalty.", image: "https://via.placeholder.com/300", emoji: "👑" },
// ];

// const Cards = () => {
//   return (
//     <div className="cards-container">
//       {hotelRooms.map(room => (
//         <div key={room.id} className="card">
//           <img src={room.image} alt={room.name} className="card-image" />
//           <h3 className="card-title">{room.emoji} {room.name}</h3>
//           <p className="card-description">{room.description}</p>
//           <button className="share-button">Share</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;


// import React from 'react';
// import './Cards.css'; // Make sure you have a CSS file for styles

// const hotelRooms = [
//   {
//     id: 1,
//     name: "Luxury Suite",
//     description: "Experience the elegance of this spacious luxury suite.",
//     image: "https://via.placeholder.com/300", // Replace with a real image URL
//     emoji: "🏨"
//   },
//   {
//     id: 2,
//     name: "Ocean View Room",
//     description: "Relax with a stunning view of the ocean.",
//     image: "https://via.placeholder.com/300", // Replace with a real image URL
//     emoji: "🌊"
//   },
//   {
//     id: 3,
//     name: "Presidential Suite",
//     description: "Indulge in the utmost luxury with our Presidential Suite.",
//     image: "https://via.placeholder.com/300", // Replace with a real image URL
//     emoji: "👑"
//   },
//   {
//     id: 4,
//     name: "Honeymoon Suite",
//     description: "A romantic escape perfect for newlyweds.",
//     image: "https://via.placeholder.com/300", // Replace with a real image URL
//     emoji: "❤️"
//   }
// ];

// const Cards = () => {
//   return (
//     <div className="cards-container">
//       {hotelRooms.map(room => (
//         <div key={room.id} className="card">
//           <img src={room.image} alt={room.name} className="card-image" />
//           <h3 className="card-title">{room.emoji} {room.name}</h3>
//           <p className="card-description">{room.description}</p>
//           <button className="share-button">Share</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// import React, { useState } from 'react';
// import './Cards.css'; // Make sure you have a CSS file for styles

// const hotelRooms = [
//   { id: 1, name: "Luxury Suite", description: "Experience the elegance of this spacious luxury suite.", image: "https://via.placeholder.com/300", emoji: "🏨" },
//   { id: 2, name: "Ocean View Room", description: "Relax with a stunning view of the ocean.", image: "https://via.placeholder.com/300", emoji: "🌊" },
//   // ... other rooms unchanged ...
//   { id: 22, name: "Royal Suite", description: "A majestic room fit for royalty.", image: "https://via.placeholder.com/300", emoji: "👑" },
// ];

// const SharePopup = ({ onClose }) => {
//   return (
//     <div className="share-popup">
//       <h4>Share this Room</h4>
//       <div className="share-options">
//         <button onClick={() => alert('Shared on WhatsApp')}>WhatsApp</button>
//         <button onClick={() => alert('Shared on Instagram')}>Instagram</button>
//         <button onClick={() => alert('Liked')}>Like</button>
//       </div>
//       <button onClick={onClose} className="close-button">Close</button>
//     </div>
//   );
// };

// const Cards = () => {
//   const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
//   const [selectedRoom, setSelectedRoom] = useState(null); // State to track which room is being shared

//   const handleShareClick = (room) => {
//     setSelectedRoom(room);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setSelectedRoom(null);
//   };

//   return (
//     <div className="cards-container">
//       {hotelRooms.map(room => (
//         <div key={room.id} className="card">
//           <img src={room.image} alt={room.name} className="card-image" />
//           <h3 className="card-title">{room.emoji} {room.name}</h3>
//           <p className="card-description">{room.description}</p>
//           <button className="share-button" onClick={() => handleShareClick(room)}>Share</button>
//         </div>
//       ))}
//       {showPopup && <SharePopup onClose={closePopup} />}
//     </div>
//   );
// };

// export default Cards;


// import React, { useState } from 'react';
// import './Cards.css'; // Make sure you have a CSS file for styles
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faShareAlt } from '@fortawesome/free-solid-svg-icons';

// const hotelRooms = [
//   { id: 1, name: "Luxury Suite", description: "Experience the elegance of this spacious luxury suite.", image: "https://via.placeholder.com/300", emoji: "🏨" },
//   { id: 2, name: "Ocean View Room", description: "Relax with a stunning view of the ocean.", image: "https://via.placeholder.com/300", emoji: "🌊" },
//   // ... other rooms unchanged ...
//   { id: 22, name: "Royal Suite", description: "A majestic room fit for royalty.", image: "https://via.placeholder.com/300", emoji: "👑" },
// ];

// const SharePopup = ({ onClose }) => {
//   return (
//     <div className="share-popup">
//       <h4>Share this Room</h4>
//       <div className="share-options">
//         <button onClick={() => alert('Shared on WhatsApp')}>WhatsApp</button>
//         <button onClick={() => alert('Shared on Instagram')}>Instagram</button>
//         <button onClick={() => alert('Liked')}>Like</button>
//       </div>
//       <button onClick={onClose} className="close-button">Close</button>
//     </div>
//   );
// };

// const Cards = () => {
//   const [showPopup, setShowPopup] = useState(false); 
//   const [selectedRoom, setSelectedRoom] = useState(null); 

//   const handleShareClick = (room) => {
//     setSelectedRoom(room);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setSelectedRoom(null);
//   };

//   return (
//     <div className="cards-container">
//       {hotelRooms.map(room => (
//         <div key={room.id} className="card">
//           <img src={room.image} alt={room.name} className="card-image" />
//           <h3 className="card-title">{room.emoji} {room.name}</h3>
//           <p className="card-description">{room.description}</p>
//           <div className="card-buttons">
//             <button className="icon-button" onClick={() => alert('Liked!')}>
//               <FontAwesomeIcon icon={faThumbsUp} /> Liked
//             </button>
//             <button className="icon-button" onClick={() => handleShareClick(room)}>
//               <FontAwesomeIcon icon={faShareAlt} /> Share
//             </button>
//           </div>
//         </div>
//       ))}
//       {showPopup && <SharePopup onClose={closePopup} />}
//     </div>
//   );
// };

// export default Cards;

import React, { useState } from 'react';
import './Cards.css'; // Make sure you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';

const hotelRooms = [
  { id: 1, name: "Luxury Suite", description: "Experience the elegance of this spacious luxury suite.", image: "https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2058.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🏨" },
  { id: 2, name: "Ocean View Room", description: "Relax with a stunning view of the ocean.", image: "https://img.freepik.com/free-photo/bedroom-with-ocean-view_1268-36011.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🌊" },
  { id: 3, name: "Mountain Retreat", description: "Escape to this serene retreat in the mountains.", image: "https://img.freepik.com/premium-photo/small-bedroom-with-mountain-view-sunlight-generative-ai-aig27_31965-191120.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🏔️" },
  { id: 4, name: "Studio Apartment", description: "Enjoy the comfort of this cozy studio apartment.", image: "https://img.freepik.com/premium-photo/building-space_664434-6159.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🏢" },
  { id: 5, name: "Family Suite", description: "Perfect for families, this suite offers ample space and comfort.", image: "https://img.freepik.com/free-photo/medium-shot-young-friends-hostel_23-2150598861.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "👨‍👩‍👧‍👦" },
  { id: 6, name: "Executive Suite", description: "Ideal for business travelers with all the necessary amenities.", image: "https://img.freepik.com/premium-photo/hotel_664434-5082.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "💼" },
  { id: 7, name: "Garden View Room", description: "Enjoy a tranquil view of the gardens from your room.", image: "https://img.freepik.com/premium-photo/bedroom-with-bed-bathtub-with-view-backyard_517312-47475.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🌸" },
  { id: 8, name: "Spa Room", description: "Relax and rejuvenate in this luxurious spa room.", image: "https://img.freepik.com/free-photo/3d-rendering-spa-massage-wellness-hotel-suite-with-bathtub_105762-2027.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🛁" },
  { id: 9, name: "Penthouse Suite", description: "Experience the height of luxury in our penthouse suite.", image: "https://img.freepik.com/premium-photo/stunning-view-modern-city-from-luxury-apartment-room-is-decorated-contemporary-style-with-dark-wood-floors-furniture_14117-271879.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🏰" },
  { id: 10, name: "Seaside Bungalow", description: "Experience the essence of seaside living in this bungalow.", image: "https://img.freepik.com/free-photo/view-luxurious-villa-with-modern-architectural-design_23-2151694110.jpg?ga=GA1.1.1750793307.1729235772&semt=ais_hybrid", emoji: "🏝️" },
];

const SharePopup = ({ onClose }) => {
  return (
    <div className="card-background">
    <div className="share-popup">
      <h4>Share this Room</h4>
      <div className="share-options">
        <Button variant="contained" onClick={() => alert('Shared on WhatsApp')} color="primary">WhatsApp</Button>
        <Button variant="contained" onClick={() => alert('Shared on Instagram')} color="primary">Instagram</Button>
        <Button variant="contained" onClick={() => alert('Liked')} color="primary">Like</Button>
      </div>
      <Button onClick={onClose} variant="outlined" className="close-button">Close</Button>
    </div>
    </div>
  );
};

const Cards = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleShareClick = (room) => {
    setSelectedRoom(room);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedRoom(null);
  };

  const handleLike = () => {
    setSnackbarMessage("Liked!");
    setSnackbarOpen(true);
  };

  const handleShare = () => {
    setSnackbarMessage("Shared!");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <div className="cards-container">
        {hotelRooms.map(room => (
          <div key={room.id} className="card">
            <img src={room.image} alt={room.name} className="card-image" />
            <h3 className="card-title">{room.emoji} {room.name}</h3>
            <p className="card-description">{room.description}</p>
            <div className="card-buttons">
              <Button variant="contained" onClick={handleLike} color="primary" startIcon={<FontAwesomeIcon icon={faThumbsUp} />}>
                Liked
              </Button>
              <Button variant="contained" onClick={() => { handleShareClick(room); handleShare(); }} color="secondary" startIcon={<FontAwesomeIcon icon={faShareAlt} />}>
                Share
              </Button>
            </div>
          </div>
        ))}
        {showPopup && <SharePopup onClose={closePopup} />}
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cards;