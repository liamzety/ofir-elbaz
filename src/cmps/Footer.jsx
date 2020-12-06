import React from 'react'
import logo from '../assets/imgs/full-logo-dark.png'

export function Footer() {
    return (
        <footer>
            <div className="logo-container">
                <div className=" flex align-center space-between">
                    <div>
                        <p>stuff</p>
                        <p>stuff</p>
                        <p>stuff</p>
                        <p>stuff</p>
                    </div>
                    <img className="logo" src={logo} alt="logo" srcSet="" />
                </div>
            </div>

        </footer>
    )
}
