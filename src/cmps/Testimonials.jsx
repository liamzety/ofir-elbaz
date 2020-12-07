import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import img1 from '../assets/imgs/estate1.jpg'
import img2 from '../assets/imgs/estate2.jpg'
import img3 from '../assets/imgs/estate3.jpg'
import img4 from '../assets/imgs/estate4.jpg'
import img5 from '../assets/imgs/estate5.jpg'
import img6 from '../assets/imgs/estate6.jpg'
import img7 from '../assets/imgs/estate7.jpg'



export function Testimonials() {
    const [currImg, setCurrImg] = useState(1)

    const [carouselControls, setCarouselControls] = useState(false)

    const imgInterval = useRef(null)

    const estates = [img1, img2, img3, img4, img5, img6, img7]

    useEffect(() => {
        setImgInterval()
        return () => {
            clearInterval(imgInterval.current)
        }
    }, [])

    function setImgInterval() {
        imgInterval.current = setInterval(() => {
            onNextPrev(true)
        }, 4000);
    }

    function onNextPrev(next) {

        if (next) setCurrImg(prevState => {
            if (prevState === 3) return 1
            return prevState + 1
        })
        if (!next) setCurrImg(prevState => {
            if (prevState === 1) return 3
            return prevState - 1
        })
    }


    return (
        <div className="testimonials">
            <div
                className="carousel relative"
                onMouseEnter={() => { clearInterval(imgInterval.current) }}
                onMouseLeave={setImgInterval}
            >
                {estates.map((src, idx) => (
                    <img key={idx} className="absolute" style={{ opacity: `${currImg === idx + 1 ? '1' : '0'}` }} src={src} alt="תמונת נכס" />

                ))}


                <div className="controls-container flex space-between align-center h100 w100 absolute">
                    <IoMdArrowDropright className="controls" onClick={() => { onNextPrev(true) }} />
                    <IoMdArrowDropleft className="controls" onClick={() => { onNextPrev(false) }} />
                </div>
            </div>

        </div>
    )
}
