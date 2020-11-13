import React from 'react';
import emailjs from 'emailjs-com';
import GirlComputer from "../images/girl-computer.jpeg"
import "./css/Footer.css"

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_t2dxw3t', 'template_hmp4tfm', e.target, 'user_XiMZOd167CfBlFaRvEfg3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    function validateForm(){

    }
    function handleSubmit(e){
        e.preventDefault()
        const name = document.querySelector('#name-input')
        const email = document.querySelector('#email-input')
        const message = document.querySelector('#message-input')
        
        if(isEmpty(name)){
            // error name
            console.log("Empty name")
        } else if (isEmpty(email)){
            // error email
            console.log("Empty email")
        } else if (isEmpty(message)){
            // error message
            console.log("Empty message")
        } else {
            // send 
        }
    }
    function isEmpty(node){
        return node.value === ""? true : false
    }
  
    return (
        <footer>
            <div className="footer-img">
                <img src={GirlComputer} alt=""/>
            </div>
            <div className="max-600-container footer-content">
                <h1>Get in touch.</h1>
                <p>
                    If you are looking to start a project or
                    just need to accelerate the completion of one,
                    contact me. Let's build something!
                </p>
            </div>
            <form className="contact-form max-600-container" onSubmit={handleSubmit}>
                <input id="name-input" type="text" name="name" placeholder="NAME" />

                <input id="email-input" type="email" name="email" placeholder="EMAIL ADDRESS" required/>

                <textarea id="message-input" name="message" placeholder="YOUR MESSAGE" />

                <input type="submit" value="SEND" />
            </form>
      </footer>
    );
  }