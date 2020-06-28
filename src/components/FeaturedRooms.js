import React, { Component } from 'react'
import Loading from "./Loading"
import Title from "./Title"
import Room from "./Room"
import { RoomContext } from "../Context"
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return (<Room key={room.id} room={room} />)
    })
    return (
      <section className="featuredRoom__section">
        <Title name="featured rooms" />
        {loading ? <Loading /> : rooms}
      </section>
    )
  }
}
