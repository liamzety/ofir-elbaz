import React from 'react'
import { GoMail } from 'react-icons/go'
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export function SideLinks() {

    return (
        <div className="side-links">
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
    )
}
