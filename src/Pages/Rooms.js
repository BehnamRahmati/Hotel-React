import React, { Component } from 'react'
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import "../App.css"
export default class Rooms extends Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">return home</Link>
          </Banner>
        </Hero>
      </>
    )
  }
}
