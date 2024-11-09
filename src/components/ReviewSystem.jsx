import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './ReviewSystem.css'; // Import the CSS file
import Navbar from './Navbar';

const ReviewSystem = () => {
  const [ratings, setRatings] = useState(0);
  const [review, setReview] = useState('');
  const [reviewsList, setReviewsList] = useState([]);
  
  // States to manage reply
  const [reply, setReply] = useState({});
  
  const handleStarClick = (value) => {
    setRatings(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review === '' || ratings <= 0) {
      alert("Please provide a valid rating and review.");
      return;
    }

    const newReview = {
      id: reviewsList.length + 1,
      rating: ratings,
      text: review,
      hidden: false,
      replies: []
    };
    
    setReviewsList([...reviewsList, newReview]);
    setRatings(0);
    setReview('');
  };

  const handleHideReview = (id) => {
    setReviewsList(reviewsList.map(review => 
      review.id === id ? { ...review, hidden: !review.hidden } : review
    ));
  };

  const handleReplyChange = (id, value) => {
    setReply({ ...reply, [id]: value });
  };

  const handleReplySubmit = (id) => {
    const reviewToReply = reviewsList.find(r => r.id === id);
    reviewToReply.replies.push(reply[id]);

    setReviewsList(reviewsList.map(r => r.id === id ? reviewToReply : r));
    setReply({ ...reply, [id]: '' }); // Clear the reply input
  };

  return (
    <div>
      <Navbar />
    <Container className="container">
      <Typography variant="h4" gutterBottom>
        Leave a Review
      </Typography>
      <Paper className="review-form">
        <form onSubmit={handleSubmit}>
          <div>
            <Typography variant="h6">Rating:</Typography>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span onClick={() => handleStarClick(star)} key={star}>
                  {star <= ratings ? <StarIcon color="primary" /> : <StarBorderIcon />}
                </span>
              ))}
            </div>
          </div>
          <div style={{ margin: '1rem 1' }}>
            <TextField
              label="Write your review"
              variant="outlined"
              multiline
              rows={4}
              value={review}
              onChange={handleReviewChange}
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit Review
          </Button>
        </form>
      </Paper>

      <Typography variant="h5" gutterBottom className="review-section">
        Reviews
      </Typography>
      {reviewsList.length === 0 ? (
        <Typography>No reviews yet.</Typography>
      ) : (
        <div>
          {reviewsList.map((item) => (
            !item.hidden && (
              <Paper key={item.id} className="review-item">
                <Typography variant="h6">Rating: {item.rating} Stars</Typography>
                <Typography>{item.text}</Typography>

                <div className="review-actions">
                  <Button onClick={() => handleHideReview(item.id)} color="secondary">
                    {item.hidden ? 'Show' : 'Hide'} Review
                  </Button>

                  <TextField
                    label="Reply"
                    variant="outlined"
                    size="small"
                    className="reply-input"
                    value={reply[item.id] || ''}
                    onChange={(e) => handleReplyChange(item.id, e.target.value)}
                  />
                  <Button
                    onClick={() => handleReplySubmit(item.id)}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Reply
                  </Button>
                </div>

                {item.replies && item.replies.length > 0 && (
                  <div className="replies">
                    <Typography variant="subtitle2">Replies:</Typography>
                    {item.replies.map((replyText, index) => (
                      <Typography key={index} className="reply-text">
                        {replyText}
                      </Typography>
                    ))}
                  </div>
                )}
              </Paper>
            )
          ))}
        </div>
        
      )}
    </Container>
    </div>
  );
};

export default ReviewSystem;