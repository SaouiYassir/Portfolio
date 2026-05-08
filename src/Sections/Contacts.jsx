import './Contacts.css'
import ContactForm from '../Components/Form/ContactForm.jsx';



function Contacts() {
    return (
        <>
            <div className='msg'>
                <h1>Let’s build something great ...</h1>
                <div className='par-msg'>
                    <p>Always looking for new projects and interesting people.</p>
                    <p>Drop a line and let’s see what we can create together.</p>
                </div>
                <a href="#ContactForm">SAY HELLOOO !!!</a>
            </div>
            <ContactForm />
        </>
    );
}

export default Contacts;