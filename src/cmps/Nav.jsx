import React, { useState } from 'react';
import smlogo from '../assets/imgs/logo-small.png'
import Scroll from 'react-scroll'
import { useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export function Nav() {
  const [isMobile, setIsMobile] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const Link = Scroll.Link
  useEffect(() => {
    if (window.innerWidth <= 480) setIsMobile(true)
    else setIsMobile(false)
  }, [])

  return (
    <nav className="nav flex fixed w100">
      <div className="container flex space-between align-center w100">
        {
          !isMobile &&
          <div className="links-container flex align-center">

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              אודות
            </Link>

            <Link
              to="availability"
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              זמני התקשרות
            </Link>

            <Link
              to="cta"
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              צור קשר
            </Link>
          </div>
        }


        {
          isMobile &&
          <>
            {isModal &&
              <div className="screen-wrapper" onClick={() => { setIsModal(prevState => !prevState) }}></div>

            }
            {isModal ?
              <AiOutlineClose className="pointer ham" onClick={() => { setIsModal(prevState => !prevState) }} />
              : <AiOutlineMenu className="pointer ham" onClick={() => { setIsModal(prevState => !prevState) }} />

            }

            <div style={{ right: isModal ? '0' : '-200px' }} className="links-container-mobile flex align-center col">

              <Link
                onClick={() => { setIsModal(prevState => !prevState) }}
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                אודות
              </Link>

              <Link
                onClick={() => { setIsModal(prevState => !prevState) }}
                to="availability"
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                זמני התקשרות
              </Link>


              <Link
                onClick={() => { setIsModal(prevState => !prevState) }}
                to="cta"
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                צור קשר
              </Link>
            </div>
          </>
        }

        <img src={smlogo} alt="logo" />

      </div>
    </nav>
  );
}
