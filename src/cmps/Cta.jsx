import React from 'react'
import { GoMail } from 'react-icons/go'
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Element } from 'react-scroll'

export function Cta() {

    return (
        <Element className="cta" id='cta' name='cta'>
            <div className="cta-container container flex align-center justify-center col h100">
                <div className="title-container">
                    <h1>  פנה אליי או השאר <span className="relative">פרטים <hr className="black-hr absolute" /></span></h1>

                </div>
                <div className="links-container flex align-center justify-center wrap">
                    <a
                        className="link facebook flex align-center"
                        href="https://www.facebook.com/ofirelbaz28/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook
                            className="facebook" />פייסבוק </a>

                    <a
                        className="link instagram flex align-center"
                        href="https://www.instagram.com/ofirelbaz21/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <IoLogoInstagram
                            className="instagram" />אינסטגרם </a>

                    <a
                        className="link whatsapp flex align-center"
                        href="https://wa.me/972528087616"
                        target="_blank"
                        rel="noopener noreferrer">
                        <IoLogoWhatsapp
                            className="whatsapp" />וואטספ </a>

                    <a
                        className="link flex align-center"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ofirelbaz592@gmail.com&su=נושא פניה&body=מעוניין שתחזור אלי למספר:"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SiGmail />Gmail  </a>
                    <a
                        className="link flex align-center"
                        href="mailto:ofirelbaz592@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GoMail />מייל  </a>
                </div>
                <div className="flex align-center">
                    <h2>או התקשר עכשיו</h2>
                    <a className="contact-num pointer"
                        href="tel:0528087616"
                        onclick="window.location.href='tel:0528087616';return false;"
                        target="_blank">0528087616</a>

                </div>

            </div>
        </Element>
    )
}
