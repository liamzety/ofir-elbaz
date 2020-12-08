import React from 'react'
import logo from '../assets/imgs/full-logo-dark.png'
import liam from '../assets/imgs/liam-logo.png'

export function Footer() {
    return (
        <footer>
            <div className="footer-container flex align-center space-between">
                <div className="credit-container">
                    <p> 2021 © כל הזכויות שמורות אופיר אלבז</p>
                    <p>דירות למכירה בראשון לציון | סוכן נדל"ן | משרד תיווך בראשון לציון</p>
                    <p>לפרטים ויצירת קשר 0528087616</p>
                    <div className="credit flex align-center">
                        <p>האתר נבנה ע"י</p>
                        <a href="https://liamzety.herokuapp.com">
                            <img className="credit-logo" src={liam} alt="" />
                        </a>
                    </div>
                </div>
                <img className="logo" src={logo} alt="logo" srcSet="" />
            </div>

        </footer>
    )
}
