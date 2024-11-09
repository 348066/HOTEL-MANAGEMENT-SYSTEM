// src/components/Auth.js
import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic, e.g., authenticate user
            console.log('Login:', { email, password });
        } else {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            // Handle registration logic, e.g., create user
            console.log('Register:', { email, password });
        }
    };

    return (
        <div className="auth-background"> {/* Background image covering the full page */}
            <div className="auth-container">
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
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
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    )}
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <p 
                    onClick={() => setIsLogin(!isLogin)} 
                    style={{ cursor: 'pointer', color: 'blue' }}
                >
                    {isLogin ? 'New user? Register here' : 'Already a user? Login here'}
                </p>
            </div>
        </div>
    );
};

export default Auth;