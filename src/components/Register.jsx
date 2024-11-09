

// import React, { useState } from 'react';
// import './Auth.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//     const[customername,setCustomerName]=useState('');
//     const[contact,setContact]=useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate(); 



//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         setErrorMessage(''); // Clear previous error message
    
//         // Basic validation logic for client-side
//         if (!/\S+@\S+\.\S+/.test(email)) {
//             setErrorMessage('Please enter a valid email address.');
//             return;
//         }
//         if (password.length < 6) {
//             setErrorMessage('Password must be at least 6 characters long.');
//             return;
//         }
//         if (password !== confirmPassword) {
//             setErrorMessage('Passwords do not match.');
//             return;
//         }
    
//         // Prepare the customer data for registration
//         const addCustomerData = {
//             Customername:customername,
//             contact:contact,
//             Email: email,
//             Password: password,
//             ConfirmPassword: confirmPassword,
//         };
    
//         try {
//             // Await the registration post request
//             const response = await axios.post('https://localhost:7010/api/NewRegCus/reg', addCustomerData);
    
//             // Check the response for the registered email
//             if (response.data && response.data.Email === null) {
//                 // If email is null in the response, show an alert
//                 alert(`Registration failed. Please try again.`);
//             } else {
//                 // Successful registration
//                 alert(`Register successful! Welcome, ${email}`);
//                 navigate('/plug'); // Navigate to the main application page
//             }
//         } catch (error) {
//             console.error(error);
//             // Handle any backend validations or errors
//             if (error.response && error.response.status === 409) {
//                 setErrorMessage('Failed to register. Please try again.'); // General error message for other issues
//             } else {
//                 setErrorMessage('This email is already registered. Please use a different email or log in.'); // Handle email already registered

//             }
//         }
//     };

//     return (
//         <div className="auth-background"> {/* Background image covering the full page */}
//             <div className="auth-container">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit}>

//                 <input
//                         type="customername"
//                         placeholder="Customer Name"
//                         value={customername}
//                         onChange={(e) => setCustomerName(e.target.value)}
//                         required
//                     />

//                        <input
//                         type="contact"
//                         placeholder="Contact"
//                         value={contact}
//                         onChange={(e) => setContact(e.target.value)}
//                         required
//                     />
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
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />

                  
//                     <button 
//                         type="submit" 
//                         style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
//                     >
//                         Register
//                     </button>
//                 </form>
//                 {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if exists */}
//             </div>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
   

    const [customerName, setCustomerName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setErrorMessage(''); // Clear previous error message
    
        // Validation logic
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
    
        // Prepare the customer data for registration
        const addCustomerData = {
            Name: customerName,
            contact: contact,
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword,
          
        };
    
        try {
            // Await the registration post request
            const response = await axios.post('https://localhost:7010/api/NewRegCus/reg', addCustomerData);
    
            // Check the response for the registration success
            if (response.data && response.data.Email === null) {
                alert(`Registration failed. Please try again.`);
            } else {
                alert(`Registration successful! Welcome, ${email}`);
                navigate('/plug'); // Navigate to the main application page
            }
        } catch (error) {
            console.error(error);
            // Handle backend validations or errors
            if (error.response && error.response.status === 409) {
                setErrorMessage('Failed to register. Please try again.'); // General error message
            } else {
                setErrorMessage('This email is already registered. Please use a different email or log in.');
            }
        }
    };

    return (
        <div className="auth-background">
            <div className="auth-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder="Customer Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Contact" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
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
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                 
                    <button 
                        type="submit" 
                        className="register-button" // Add a class for styling
                    >
                        Register
                    </button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if exists */}
            </div>
        </div>
    );
};

export default Register;