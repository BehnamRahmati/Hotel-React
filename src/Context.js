import React, { Component } from 'react'
import items from "./data"
const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false
    }
  }

  //  getting Data

  componentDidMount() {
    let rooms = this.formatData(items);

    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(room => room.price))
    let maxSize = Math.max(...rooms.map(room => room.size))
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })

  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => (image.fields.file.url))
      let room = { ...item.fields, images, id };
      return room;
    })
    return tempItems;
  }

  getRoom = (slug) => {
    const tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug)
    return room
  }

  handleChange = (event) => {
    const type = event.target.type
    const name = event.target.name
    const value = event.target.value
  }

  filterRooms = () => { }


  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return (function RoomConsumerWrapper(props) {
    return (<RoomConsumer>
      {value => <Component {...props} context={value} />}
    </RoomConsumer>)
  })

}


export { RoomContext, RoomProvider, RoomConsumer }