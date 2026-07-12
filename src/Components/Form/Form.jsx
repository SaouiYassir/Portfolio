import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Form.css'

const initialForm = {
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
}

function ContactForm() {
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState('idle')

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value,
        }))

        if (status !== 'idle') {
            setStatus('idle')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (status === 'sending') return

        setStatus('sending')

        const templateParams = {
            from_name: form.from_name.trim(),
            from_email: form.from_email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
            submitted_at: new Date().toLocaleString('en-GB', {
                dateStyle: 'long',
                timeStyle: 'short',
            }),
        }

        try {
            await emailjs.send(
                'service_t3kgw2g',
                'template_5s7byy3',
                templateParams,
                {
                    publicKey: 'shAkDUqexRq2d1Kz2',
                }
            )

            setForm(initialForm)
            setStatus('sent')
        } catch (error) {
            console.error('EmailJS error:', error)
            setStatus('error')
        }
    }

    return (
        <div className="contact-form-wrapper">
            <p className="form-label">Or send us a message</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="from_name">Name</label>

                    <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        value={form.from_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="from_email">Email address</label>

                    <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={form.from_email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>

                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Website project, branding, collaboration..."
                        maxLength={120}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Project details</label>

                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, timeline and budget."
                        maxLength={3000}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="form-submit"
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? (
                        'Sending...'
                    ) : (
                        <>
                            Send message
                            <i className="bi bi-send" aria-hidden="true"></i>
                        </>
                    )}
                </button>

                <div aria-live="polite">
                    {status === 'sent' && (
                        <p className="form-status form-status--success">
                            Your message has been sent successfully. We will reply soon.
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="form-status form-status--error">
                            We could not send your message. Please try again or contact us
                            directly.
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default ContactForm