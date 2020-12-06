import React, { useState } from 'react';
import smlogo from '../assets/imgs/logo-small.png'
import Scroll from 'react-scroll'
import { useEffect } from 'react';

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

            <a >צור קשר</a>
          </div>
        }


        {
          isMobile &&
          <>
            <button onClick={() => { setIsModal(prevState => !prevState) }}>haumber</button>
            <div style={{ right: isModal ? '0' : '-200px' }} className="links-container-mobile flex align-center col">

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

              <a >צור קשר</a>
            </div>
          </>
        }

        <img src={smlogo} alt="logo" />

      </div>
    </nav>
  );
}
