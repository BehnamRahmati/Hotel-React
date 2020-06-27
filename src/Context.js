import React, { Component } from 'react'
import Items from "./data"
const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
    }
  }

  //  getting Data

  componentDidMount() {
    let rooms = this.formatData(Items);
    let featuredRooms = rooms.filter(room => room.feature === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    })

  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => (image.fields.file.url))
      let room = { ...items.fields, images, id };
      return room;
    })
    return tempItems;
  }



  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer }