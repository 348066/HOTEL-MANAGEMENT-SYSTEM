import React, { useState } from 'react';
import './Contact.css';  // To include styling
import Navbar from './Navbar';

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // You would handle the message sending logic here.
    //     console.log('Message sent:', { fullName, email, description });

    //     alert('Message sent ')
    //     setFullName('');
    //     setEmail('');
    //     setDescription('');
    // };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    
        // Log the message details (optional)
        console.log('Message sent:', { fullName, email, description });
    
        // Customized alert message
        alert(`Hello ${fullName}! Your message has been sent successfully. 
               Thank you for reaching out! An admin will review it shortly.`);
    
        // Reset form fields
        setFullName('');
        setEmail('');
        setDescription('');
    };
    return (
        <div>
            <Navbar />
        <div className="contact">
        <h1 className="heading">Contact Us</h1>
        <p className='contact-us-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores neque sunt accusamus numquam amet eos dolorem, unde ab impedit id odit temporibus voluptatibus minima beatae quis voluptas dolor repudiandae.
        </p>
        <div className="contact-container">
            <div className="left-side">
                    {/* <div className="logo-container">
                        <img src="logo.png" alt="Logo" className="logo" />
                    </div> */}
                    <br/><br/><br/><br/>
                    <address> 
                        <strong>Address:</strong><br />
                                         1234 Main St,<br />
                                         Springfield, Anywhere
                    </address>
                    <div className="phone">
                        <strong>Phone:</strong> <br /> 9074756094
                        
                    </div>
                    <div className="Email"><br/><br/><br/>
                        <strong>Email:</strong> Supprortbook@gmil.com
                    </div>
                    
                </div>
                <div className="right-side">
                    <h2 className="send-message-heading">Send us a message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;