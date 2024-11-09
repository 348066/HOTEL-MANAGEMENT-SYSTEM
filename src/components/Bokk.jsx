import React, { useState } from 'react';
import './Bokk.css'; // Importing the CSS file for styling
import axios from 'axios';

const PaymentForm = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateCardNumber = (number) => {
    const regex = /^\d{16}$/; // Regex for 16 digits
    return regex.test(number);
  };

  const validateExpiryDate = (expiry) => {
    const [month, year] = expiry.split('/').map((part) => parseInt(part, 10));
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
    const currentYear = currentDate.getFullYear() % 100; // Get last two digits of year

    return (year > currentYear) || (year === currentYear && month >= currentMonth);
  };

  const validateCVC = (cvc) => {
    const regex = /^\d{3}$/; // Regex for 3 digits
    return regex.test(cvc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validating inputs
    if (!validateCardNumber(cardDetails.cardNumber)) {
      setErrorMessage('Invalid card number. It must be 16 digits.');
      return;
    }
    if (!cardDetails.cardName) {
      setErrorMessage('Cardholder name is required.');
      return;
    }
    if (!validateExpiryDate(cardDetails.expiry)) {
      setErrorMessage('Invalid expiry date. Ensure the card is not expired.');
      return;
    }
    if (!validateCVC(cardDetails.cvc)) {
      setErrorMessage('Invalid CVC. It must be 3 digits.');
      return;
    }

    // Split expiry into month and year
    const [monthString, yearString] = cardDetails.expiry.split('/');
    const ExpirationMonth = parseInt(monthString, 10);
    const ExpirationYear = parseInt(yearString, 10);

    const addpaymentData = {
      cardNumber: cardDetails.cardNumber,
      CardholderName: cardDetails.cardName,
      ExpirationMonth: ExpirationMonth, // Set the month correctly
      ExpirationYear: ExpirationYear,   // Set the year correctly
      Cvv: cardDetails.cvc,
    };

    try {
      // Await the payment post request
      const response = await axios.post('https://localhost:7010/api/Payment/payment', addpaymentData);

      // Check the response for the payment success
      if (response.status === 200) {
        setSuccessMessage('Payment successfully processed!');
        alert('Payment Successfully Confirmed!!!')
        // Optionally clear/redirect here
      } else {
        setErrorMessage('Payment failed!');
      }
    } catch (error) {
      console.error(error);
      // Handle backend validations or errors
      if (error.response) {
        setErrorMessage('Failed to process payment. Please try again.');
      } else {
        setErrorMessage('An error occurred while processing your payment. Please check your network connection.');
      }
    }

    // Reset the form after submission
    setCardDetails({
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvc: '',
    });
  };

  return (
    <div className="full-container">
      <div className="payment-container">
        <div className="card">
          <div className="card-details">
            <h2>Payment Details</h2>
            <div className="card-number">{cardDetails.cardNumber || '**** **** **** ****'}</div>
            <div className="card-holder-name">{cardDetails.cardName || 'Cardholder Name'}</div>
            <div className="expiry-cvc">
              <div className="expiry">{cardDetails.expiry || 'MM/YY'}</div>
              <div className="cvc">{cardDetails.cvc || 'CVC'}</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="payment-form">
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            placeholder="Card Number"
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="text"
            name="cardName"
            value={cardDetails.cardName}
            placeholder="Cardholder Name"
            onChange={handleChange}
            required
            className="input-field"
          />
          <div className="expiry-cvc-container">
            <input
              type="text"
              name="expiry"
              value={cardDetails.expiry}
              placeholder="MM/YY"
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="cvc"
              value={cardDetails.cvc}
              placeholder="CVC"
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Pay</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;