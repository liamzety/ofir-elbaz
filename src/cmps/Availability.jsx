import React from 'react'
import { Element } from 'react-scroll'

export function Availability() {
    return (
        <Element id='availability' name='availability'>
            <div className="availability flex col align-center">

                <h2>שעות ליצירת קשר</h2>
                <ul>
                    <li>יום ראשון, 8:00-22:00</li>
                    <li>יום שני, 8:00-22:00</li>
                    <li>יום שלישי, 8:00-22:00</li>
                    <li>יום רביעי, 8:00-22:00</li>
                    <li>יום חמישי, 8:00-22:00</li>
                    <li>יום שישי, 8:00-14:00</li>
                    <li>יום שבת, <strong>לא פעיל</strong></li>
                </ul>

            </div>
        </Element>
    )
}
