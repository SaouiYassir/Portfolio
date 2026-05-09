import './Contacts.css'
import ContactForm from '../Components/Form/ContactForm.jsx';



function Contacts() {
    return (
        <>
            <div className='msg' id='Contacts' >
                <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">Let’s build something great ...</h1>
                <div className='par-msg' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <p>Always looking for new projects and interesting people.</p>
                    <p>Drop a line and let’s see what we can create together.</p>
                </div>
                <a href="#ContactForm" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Get in Touch</a>
            </div>
            <ContactForm />
        </>
    );
}

export default Contacts;