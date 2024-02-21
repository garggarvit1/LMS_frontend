import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const Contact = () => {

  const form = useRef();
  console.log(form)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m68xi5f', 'template_82asj9i', form.current, 'TXCyWjym-Hit-jsB2')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='ContactForm'>
      <form ref={form} className='formmail' onSubmit={sendEmail}>
            <h1>Contact <span> Us!</span></h1>
            <input type='text' name='user_name' placeholder='Enter your name' className='contactUs'/>
            <input type="text" name='user_email' placeholder='Enter email' className='contactUs' />
            <input type="number" name='phone' placeholder='+91'className='contactUs' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='type here...' className='contactUs'></textarea>
            <button type='submit' value='send' className='sendemail bg-[#3C5EC1]'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;