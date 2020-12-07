import React from 'react'
import me from '../assets/imgs/me2.jpg'
import { Element } from 'react-scroll'


export function About() {
    return (
        <div className="about">
            <div className="container flex justify-center align-center text-center col">
                <Element id='about' name='about'>
                    <div>
                        <img className="me" src={me} alt="" srcSet="" />
                        <div className="txt-container">
                            <div className="title-container">
                                <h1>  אופיר אלבז יועץ נדל"ן <span className="relative">מוסמך <hr className="gold-hr absolute" /></span>  </h1>
                            </div>
                            <span className="subtitle">ראשון לציון</span>
                            <p>בחרתי להצטרף לחברת קלר וויליאמס בשל היותה החברה הגדולה בעולם בעלת הטכנולוגיות המתקדמות ביותר בתחום הנדל"ן כיום.</p>

                            <p>בחרתי לעבוד במקצוע זה מתוך תשוקה גדולה לעולם הנדל"ן, זהו תחום שמעניין אותי מאוד מאז שאני זוכר את עצמי. יחד עם זאת להיות שותף דרך ולקחת חלק באחת מההחלטות הגדולות והחשובות ביותר בחיי לקוחותיי ולהגשים להם את החלום לגור בבית חלומותיהם. </p>
                        </div>
                    </div>
                </Element>

            </div>
        </div>
    )
}
