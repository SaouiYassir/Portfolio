import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_t3kgw2g', 
      'template_5s7byy3', 
      form.current, 
      'shAkDUqexRq2d1Kz2'
    )
    .then(() => {
        setStatus('Message sent successfully!');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
    }, (error) => {
        console.error('EmailJS Error:', error.text);
        setStatus('Failed to send. Please try again.');
    });
  };

  return (
    <div id='ContactForm'>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        
        <div className='input-group'>
          <label>Your Name</label>
          <input type="text" name="from_name" required />
        </div>

        <div className='input-group'>
          <label>Your Email</label>
          <input 
            type="email" 
            name="from_email" 
            placeholder='your-email@gmail.com' 
            required  
          />
        </div>

        <div className='input-group'>
          <label>Message</label>
          <textarea name="message" required/>
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button 
          type="submit" 
          disabled={status === 'Sending...'}
          className='send-butt'
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Email'}
        </button>
        
        {status && (
          <p style={{
            marginTop: '15px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: status.includes('successfully') ? '#28a745' : '#dc3545'
          }}>
              {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;