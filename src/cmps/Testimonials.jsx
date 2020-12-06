import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
export function Testimonials() {
    const [currImage, setCurrImage] = useState(1)

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

        if (next) setCurrImage(prevState => {
            if (prevState === 3) return 1
            return prevState + 1
        })
        if (!next) setCurrImage(prevState => {
            if (prevState === 1) return 3
            return prevState - 1
        })
    }

    return (
        <div className="testimonials">
            <div
                className="carousel flex space-between align-center "
                style={{ backgroundImage: `url(${require(`../assets/imgs/estate${currImage}.jpg`)})` }}
                onMouseEnter={() => { clearInterval(imgInterval.current) }}
                onMouseLeave={setImgInterval}
            >
                <IoMdArrowDropright className="controls" onClick={() => { onNextPrev(true) }} />
                <IoMdArrowDropleft className="controls" onClick={() => { onNextPrev(false) }} />

            </div>
        </div>
    )
}
