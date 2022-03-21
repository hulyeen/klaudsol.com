import React, {useState} from "react";
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'
export default function ContactUsForm(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Function to send message to Slack 
    async function sendMessage(e) {
       e.preventDefault();
    
       var today= new Date();
       var date_sent = today.toLocaleString()
       const data = {
        "text": `----- KLAUDSOL MESSAGE SUPPORT ----- \nDATE SENT: ${date_sent} \n\nSENDER DETAILS: \nName: ${name} \nEmail: ${email} \nSubject: ${subject} \n\nMessage: ${message}`,
       }

       let result = await axios.post(`https://${process.env.NEXT_PUBLIC_WEBHOOK_HOST_NAME}/${process.env.NEXT_PUBLIC_WEBHOOK_PATH}/${process.env.NEXT_PUBLIC_WEBHOOK_LAST_QUERY_STRING}`, JSON.stringify(data), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
          delete headers.post["Content-Type"]
          return data
        }]
      })
  
      if (result.status === 200) {
       
        alert("Your message has already been sent. We will respond as soon as possible. Thank you for your inquiry!")

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

      } else {
        alert("There was an error.  Please try again later.")
      }
  
    }
    

    // Design of form
    return ( <div className="container">
    <div id="contact" className="contact clearfix">
      <div className="contact-title">
        <h2>CONTACT US</h2>
        <p>
          Questions? Suggestions? New ideas that can improve YOUR business?
          Let us know how we can team up to solve problems.
        </p>
      </div>
      <div className="contact-info">
        <div className="contact-box">
          <span className="ti-email" />
          <h3>Email</h3>
          <p>hello@klaudsol.com</p>
        </div>
        <div className="contact-box">
          <span className="ti-comment" />
          <h3>Phone</h3>
          <p>+63 2 7618 5109</p>
        </div>
        <div className="contact-box" style={{ height: 185 }}>
          <span className="ti-home" />
          <h3>Address</h3>
          <p style={{ marginTop: 15, fontSize: "80%" }}>
            Level 10-01 One Global Place <br />
            5th Avenue &amp; 25th Street <br />
            Bonifacio Global City, Taguig, Metro Manila <br />
            Philippines
          </p>
        </div>
      </div>

      <div className="contact-form">
        <form id="ajax-contact" onSubmit={(e) => sendMessage(e)}>
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Your name here"
              required
              value={name}
              onChange={e => setName(e.target.value) }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Your email here"
              required
              value={email}
              onChange={(e) => {setEmail(e.target.value) }}
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-control"
              placeholder="Your subject here"
              required
              value={subject}
              onChange={(e) => {setSubject(e.target.value) }}
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              placeholder="Enter message"
              required
              value={message}
              onChange={(e) => {setMessage(e.target.value) }}
            />
            <div className="actions">
              <input
                type="submit"
                defaultValue="Send Message"
                name="submit"
                id="submitButton"
                className="btn"
                title="Submit Your Message!"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}