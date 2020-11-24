import React from 'react';
import emailjs from 'emailjs-com';
import GirlComputer from "../images/girl-computer.jpeg"
import {animateScroll as scroll } from "react-scroll";
import "./css/Footer.css"

export default function ContactUs() {

    // scroll to Top from react-scroll
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    function sendEmail(e) {
      e.preventDefault();
      const errorJs = document.querySelector('.email-js-error')
      emailjs.sendForm('service_t2dxw3t', 'template_hmp4tfm', e.target, 'user_XiMZOd167CfBlFaRvEfg3')

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error)
            errorJs.style.display = "block"
            setTimeout(()=>{
                errorJs.style.display = "none"
            },3000)
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        const name = document.querySelector('#name-input')
        const email = document.querySelector('#email-input')
        const message = document.querySelector('#message-input')
        const error = document.querySelector('.form-error')
        const success = document.querySelector('.form-success')
        
        if(isEmpty(name)){
            // error name
            error.style.display = "block"
        } else if (isEmpty(email)){
            // error email
            error.style.display = "block"
        } else if (isEmpty(message)){
            // error message
            error.style.display = "block"
        } else {
            error.style.display = "none"
            // send email
            sendEmail(e)
            // clear form
            name.value = ""
            email.value = ""
            message.value = ""
            // show success!
            success.style.display = "block"
            setTimeout(() => {
                success.style.display = "none"
            },3000)
    
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
            <div className="max-600-container footer-content" id="contact">
                <h1>Get in touch.</h1>
                <p>
                    If you are looking to start a project or
                    just need to accelerate the completion of one,
                    contact me. Let's build something!
                </p>
                <div className="form-error">
                    * Please fill out all required fields.
                </div>
            </div>
            <form className="contact-form max-600-container" onSubmit={handleSubmit}>
                <input id="name-input" type="text" name="name" placeholder="NAME" />

                <input id="email-input" type="email" name="email" placeholder="EMAIL ADDRESS" required/>

                <textarea id="message-input" name="message" placeholder="YOUR MESSAGE" />

                <input type="submit" value="SEND" />
            </form>
            <div className="form-success">
                <h1>Thank you for contacting me!</h1>
                <p>I will get back to you as soon as possible.</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/carla-sahagun/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/itacamba"><i className="fab fa-github"></i></a>
                    <a href="https://medium.com/@daniela.sahagun03"><i className="fab fa-medium-m"></i></a>
                </div>
            </div>
            <div className="email-js-error">
                <p>Error Sending Message - Email.js</p>
            </div>
            <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
      </footer>
    );
  }