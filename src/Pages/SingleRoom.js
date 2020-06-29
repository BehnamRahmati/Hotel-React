import React, { Component } from 'react'
import DefaultBcg from "../images/room-1.jpeg"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { RoomContext } from "../Context"
import StyledHero from "../components/StyledHero"
export default class SingleRoom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slug: this.props.match.params.room,
      DefaultBcg,
    }
    console.log(this.props);
  }


  static contextType = RoomContext;
  componentDidMount() { }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug)
    if (!room) {
      return (<div className="error">
        <h3>could not find file ...</h3>
        <Link to="/rooms" className="btn-primary">back to rooms</Link>
      </div>)
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

    return (
      <>
        <StyledHero img={images[0] || this.state.DefaultBcg} hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">back to rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((image, index) => (<img key={index} src={image} alt='room' />))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description} </p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>extras</h3>
          <ul className="extras">
            {extras.map((item, index) => (<li key={index}>- {item}</li>))}
          </ul>
        </section>
      </>
    )
  }
}
