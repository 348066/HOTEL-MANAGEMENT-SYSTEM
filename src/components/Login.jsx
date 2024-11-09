
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios for API requests

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState(''); // State for error messages

//     // Function to validate email format
//     const isValidEmail = (email) => {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     };

//     // Function to validate password
//     const isValidPassword = (password) => {
//         return password.length >= 6; // Adjust according to your requirements
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior
//         setErrorMessage(''); // Clear existing error messages

//         // Validate email and password before making the API call
//         if (!isValidEmail(email)) {
//             setErrorMessage("Please enter a valid email address.");
//             return;
//         }

//         if (!isValidPassword(password)) {
//             setErrorMessage("Password must be at least 6 characters long.");
//             return;
//         }

//         const Logincustomer = {
//             Email: email,
//             Password: password
//         };

//         try {
//             const response = await axios.post('https://localhost:7010/api/NewRegCus/login', Logincustomer);

//            if (response.status===200) { // Adjust according to your backend response structure
//                 // alert(`Login successful! Welcome, ${email}`);
//                 // // Navigate to the main application page
//                 //  navigate('/');
//                  if (response.data.Email === 'muruga@gmail.com') {
//                      alert(`Admin login successful! Welcome, ${email}`);
//                   navigate('/loop1'); // Navigate to the admin dashboard
//                  } else {
//                    alert(`Login successful! Welcome, ${email}`);
//                          navigate('/'); // Navigate to the main application page
//                     }

//             } else {
//                 setErrorMessage('Login failed. Invalid email or password or kindly register below  if your new .'); // Handle login failure
//             }
//         } catch (error) {
//             console.error(error);
//             setErrorMessage('Failed to login. Please try again.'); // Show error to user
//         }
//     };

//     const handleRegister = () => {
//         navigate('/register'); // Navigate to the Register page
//     };

//     return (
//         <div className="auth-background"> {/* Background image covering the full page */}
//             <div className="auth-container">
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the onSubmit event */}
//                     {/* Email Input */}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     {/* Password Input */}
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />

//                     {/* Submit Button */}
//                     <button type="submit">Login</button>
//                 </form>

//                 {/* Display error message */}
//                 {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>} 

//                 {/* Register Button */}
//                 <p style={{ textAlign: 'center', marginTop: '20px' }}>
//                     Don't have an account?{' '}
//                     <button onClick={handleRegister} style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//                         Register here
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 6;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Validate email and password
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword(password)) {
            setErrorMessage("Password must be at least 6 characters long.");
            return;
        }

        const Logincustomer = {
            
            Email: email,
            Password: password
        };

        try {
            const response = await axios.post('https://localhost:7010/api/NewRegCus/login', Logincustomer);

            if (response.status === 200) {
                const userData = response.data;

                // Check if user is an admin
                if (userData.Email=== 'muruga@gmail.com') {
                    alert(`Admin login successful! Welcome, ${email}`);
                    navigate('/loop1'); // Navigate to the admin dashboard
                } else {
                    alert(`Login successful! Welcome, ${email}`);
                    navigate('/'); // Navigate to the main application page
                }
            } else {
                setErrorMessage('Login failed. Invalid email or password.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to login. Please try again.');
        }
    };

    const handleRegister = () => {
        navigate('/register'); // Navigate to the Register page
    };

    return (
        <div className="auth-background">
            <div className="auth-container">
                <h2>Login</h2>
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
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                    Don't have an account?{' '}
                    <button 
                        onClick={handleRegister} 
                        style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                        Register here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const isValidEmail = (email) => {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     };

//     const isValidPassword = (password) => {
//         return password.length >= 6;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrorMessage('');

//         // Validate email and password
//         if (!isValidEmail(email)) {
//             setErrorMessage("Please enter a valid email address.");
//             return;
//         }

//         if (!isValidPassword(password)) {
//             setErrorMessage("Password must be at least 6 characters long.");
//             return;
//         }

//         const loginCustomer = {
//             Email: email,
//             Password: password
//         };

//         try {
//             const response = await axios.post('https://localhost:7010/api/NewRegCus/login', loginCustomer);

//             if (response.status === 200) {
//                 const userData = response.data;

//                 // Check if user is an admin
//                 if (userData.data.Email === 'murugan@gmail.com') {
//                     alert(`Admin login successful! Welcome, ${email}`);
//                     navigate('/loop1'); // Navigate to the admin dashboard
//                 } else {
//                     alert(`Login successful! Welcome, ${email}`);
//                     navigate('/'); // Navigate to the main application page
//                 }
//             } else {
//                 setErrorMessage('Login failed. Invalid email or password.');
//             }
//         } catch (error) {
//             console.error(error);
            
//             // Customize the error message based on the error response
//             if (error.response && error.response.status === 401) {
//                 setErrorMessage('Login failed. Invalid email or password.');
//             } else {
//                 setErrorMessage('Failed to login. Please try again.');
//             }
//         }
//     };

//     const handleRegister = () => {
//         navigate('/register'); // Navigate to the Register page
//     };

//     return (
//         <div className="auth-background">
//             <div className="auth-container">
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <button type="submit">Login</button>
//                 </form>
//                 {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
//                 <p style={{ textAlign: 'center', marginTop: '20px' }}>
//                     Don't have an account?{' '}
//                     <button 
//                         onClick={handleRegister} 
//                         style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//                         Register here
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;