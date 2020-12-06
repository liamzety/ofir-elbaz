import React from 'react'
import me from '../assets/imgs/me2.png'
import { Element } from 'react-scroll'


export function About() {
    return (
        <div className="about">
            <div className="container flex justify-center align-center text-center col">
                <Element id='about' name='about'>
                    <div>
                        <img className="me" src={me} alt="" srcSet="" />
                        <div className="txt-container">
                            <div className="title-container relative">
                                <h1>לורם איפסום</h1>
                                <hr className="gold-hr absolute" />

                            </div>
                            <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>

                            <p>משרד תיווך בראשון לציון | דירות למכירה בראשון לציון </p>
                        </div>
                    </div>
                </Element>

            </div>
        </div>
    )
}
