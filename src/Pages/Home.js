import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"
export default class Home extends Component {
  render() {
    return (
      <>
        <Hero>
          <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $2.99" >
            <Link to="/rooms" className="btn-primary">our rooms</Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    )
  }
}
