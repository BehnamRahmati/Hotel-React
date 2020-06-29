import React from 'react'
import Room from "./Room"
export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortuanetly no match has been found!!!</h3>
      </div>
    )
  }
  return (
    <section className="roomList__section">
      <div className="roomList__center">
        {rooms.map(room => (<Room key={room.id} room={room}></Room>))}
      </div>
    </section>
  )
}
