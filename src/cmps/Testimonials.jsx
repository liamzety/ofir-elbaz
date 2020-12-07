import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import img1 from '../assets/imgs/estate1.jpg'
import img2 from '../assets/imgs/estate2.jpg'
import img3 from '../assets/imgs/estate3.jpg'



export function Testimonials() {
    const [currImg, setCurrImg] = useState(1)

    const [carouselControls, setCarouselControls] = useState(false)

    const imgInterval = useRef(null)

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
                <img className="absolute" style={{ opacity: `${currImg === 1 ? '1' : '0'}` }} src={img1} alt="" />
                <img className="absolute" style={{ opacity: `${currImg === 2 ? '1' : '0'}` }} src={img2} alt="" />
                <img className="absolute" style={{ opacity: `${currImg === 3 ? '1' : '0'}` }} src={img3} alt="" />

                <div className="controls-container flex space-between align-center h100 w100 absolute">
                    <IoMdArrowDropright className="controls" onClick={() => { onNextPrev(true) }} />
                    <IoMdArrowDropleft className="controls" onClick={() => { onNextPrev(false) }} />
                </div>
            </div>

        </div>
    )
}
