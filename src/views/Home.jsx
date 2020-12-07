import React from 'react'
import { About } from '../cmps/About'
import { Availability } from '../cmps/Availability'
import { Cta } from '../cmps/Cta'
import { Footer } from '../cmps/Footer'
import { Nav } from '../cmps/Nav'
import { SideLinks } from '../cmps/SideLinks'
import { Testimonials } from '../cmps/Testimonials'

export function Home() {

  return (
    <section className="home">
      <Nav />
      <Testimonials />
      <About />
      <Availability />
      <Cta />
      <Footer />
      <SideLinks />
    </section>
  )
}
