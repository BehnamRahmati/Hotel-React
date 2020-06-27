import React, { Component } from 'react'
import Loading from "./Loading"
import { RoomContext } from "../Context"
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    return (
      <div>
        this is a featured room
      </div>
    )
  }
}
