// ContactForm.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Form.css'

function ContactForm() {
    const [status, setStatus] = useState('idle') // idle | sending | sent | error
    const [form, setForm] = useState({ from_name: '', from_email: '', Subject: '', message: '' })

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        const templateParams = {
            ...form,
            time: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }),
        }

        emailjs
            .send(
                'service_t3kgw2g',
                'template_5s7byy3',
                form.current,
                'shAkDUqexRq2d1Kz2'
            )
            .then(() => {
                setStatus('sent')
                setForm({ from_name: '', from_email: '', Subject: '', message: '' })
            })
            .catch(() => setStatus('error'))
    }

    return (
        <div className="contact-form-wrapper">
            <p className="form-label">Or send a message</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="from_name">Name</label>
                    <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        value={form.from_name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="from_email">Email</label>
                    <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={form.from_email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Subject">Subject</label>
                    <input
                        id="Subject"
                        name="Subject"
                        type="text"
                        value={form.Subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Project details</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea"
                        required
                    />
                </div>

                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                    {status !== 'sending' && <i className="bi bi-send"></i>}
                </button>

                {status === 'sent' && <p className="form-status form-status--success">Message sent — I'll get back to you soon.</p>}
                {status === 'error' && <p className="form-status form-status--error">Something went wrong. Try WhatsApp instead, or email me directly.</p>}
            </form>
        </div>
    )
}

export default ContactForm