import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

       const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.include('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        alert(`Thank you, ${name}, your message has been sent!`);
        setName('');
        setEmail('');
        setMessage('');
       };

       return (
        <section style={{ padding: '20px', maxWidth: '400px', margin: 'auto'}}>
            <h2>Contact Me</h2>
            <from onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input 
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}required />
                    
                </div>
                <div>
                    <label>Email:</label><br />
                    <input 
                    type="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}required />

                </div>
                <div>
                    <label>Message:</label><br />
                    <input 
                    type="message"
                    value={email}
                    onChange={ (e) => setMessage(e.target.value)}required />
                </div>
                {error && <p style={{ color: 'red' }}></p>}
                <button type="submit">Send</button>
            </from>
            <p style={{ fontsize: '12px', marginTop: '1opx' }}>
                Your data will only be used to contact you, We do not store or share your information.
            </p>
        </section>
       );
}

export default ContactForm;
