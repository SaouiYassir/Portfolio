import SEO from '../../Components/SEO/SEO'
import './Privacy.css'

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Notice"
        description="Learn how information submitted through the contact form is used."
        path="/privacy"
      />

      <main className="privacy-page">
        <article className="privacy-container">
          <header className="privacy-header">
            <span className="eyebrow">Privacy</span>
            <h1>Privacy notice</h1>
            <p>Last updated: July 2026</p>
          </header>

          <section>
            <h2>Information collected</h2>
            <p>
              When you use the contact form, you may provide your name, email
              address, subject, and project details.
            </p>
          </section>

          <section>
            <h2>How your information is used</h2>
            <p>
              The information you submit is used only to understand your
              enquiry, contact you, and respond to your message. It is not sold
              or used for advertising or marketing.
            </p>
          </section>

          <section>
            <h2>EmailJS</h2>
            <p>
              Contact-form messages are delivered using EmailJS. EmailJS
              processes the submitted information to transmit your message.
            </p>
          </section>

          <section>
            <h2>WhatsApp</h2>
            <p>
              When you choose to contact me through WhatsApp, you leave this
              website and your communication is handled according to
              WhatsApp&apos;s own privacy practices.
            </p>
          </section>

          <section>
            <h2>Data retention</h2>
            <p>
              Messages may be kept for as long as reasonably necessary to
              respond to your enquiry and maintain relevant correspondence.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You may contact me to request the correction or deletion of
              information you previously submitted through this website.
            </p>
          </section>

          <section>
            <h2>Changes to this notice</h2>
            <p>
              This notice may be updated when the website, contact methods, or
              third-party services change.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}

export default Privacy