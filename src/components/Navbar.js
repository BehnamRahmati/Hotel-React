import React, { Component } from 'react'
import "./Navbar.css"
import logo from "../logo.svg"
import { Link } from "react-router-dom"
import { FaAlignRight } from "react-icons/fa"
export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__container">
          <Link className="navbar__logo" to="/"><img className="navbar__logo" src={logo} alt="Logo" /></Link>
          <button type="button" className="navbar__btn" onClick={this.handleToggle}><FaAlignRight className="navbar__icon" /></button>
          <ul className={this.state.isOpen ? "navbar__links show-nav" : "navbar__links"}>
            <li>
              <Link className="navbar__link" to="/">home</Link>
            </li>
            <li>
              <Link className="navbar__link" to="/rooms">rooms</Link>
            </li>
            <li>
              <Link className="navbar__link" to="/about">about</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
