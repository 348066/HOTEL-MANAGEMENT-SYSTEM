import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adminlog = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretCode, setSecretCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Predefined admin credentials
    const adminEmail = 'admin@gmail.com'; // Change to your admin email
    const adminPassword = 'password123'; // Change to your admin password
    const adminSecretCode = '12345'; // Change to your secret code

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 6;
    };

    const isValidSecretCode = (code) => {
        return code === adminSecretCode; // Checks against the predefined secret code
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Validate email, password, and secret code
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword(password)) {
            setErrorMessage("Password must be at least 6 characters long.");
            return;
        }

        if (!isValidSecretCode(secretCode)) {
            setErrorMessage("Invalid secret code.");
            return;
        }

        // Here we validate against predefined credentials
        if (email === adminEmail && password === adminPassword) {
            alert(`Welcome, ${email}! Admin login successful.`);
            navigate('/loop1'); // Navigate to the admin dashboard
        } else {
            setErrorMessage('Login failed. Invalid email or password.');
        }
    };

    return (
        <div className="auth-background">
            <div className="auth-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Secret Code"
                        value={secretCode}
                        onChange={(e) => setSecretCode(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Adminlog;