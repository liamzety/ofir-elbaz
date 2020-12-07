import React from 'react'
import facebook from '../assets/imgs/facebook.jpg'

export function Facebook() {
    return (
        <div className="facebook">
            <div className="facebook-container container flex align-center col">
                <h2>  <a href="https://www.facebook.com/ofirelbaz28/">לחץ</a> כדאי להתעדכן במאגר הנכסים שלי </h2>
                <a className="flex justify-center" href="https://www.facebook.com/ofirelbaz28/"><img className="pointer" src={facebook} alt="" /></a>
            </div>
        </div>
    )
}
