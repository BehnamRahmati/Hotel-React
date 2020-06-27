import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa"


export default class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "free cocktail",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias."
        },
        {
          icon: <FaHiking />,
          title: "endless hiking",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias."
        },
        {
          icon: <FaBeer />,
          title: "strongest beer",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias."
        },
        {
          icon: <FaShuttleVan />,
          title: "free shuttle",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias."
        },
      ]
    }
  }

  render() {
    return (
      <section className="services-section">
        <Title name="services" />
        <div className="services__center">
          {
            this.state.services.map((service, index) => {
              return (
                <article key={index} className="service">
                  <span>{service.icon}</span>
                  <h6>{service.title}</h6>
                  <p>{service.info} </p>
                </article>
              )
            })
          }
        </div>
      </section>
    )
  }
}
