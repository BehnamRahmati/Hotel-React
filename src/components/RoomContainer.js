import React from 'react'
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList"
// import { RoomConsumer } from "../Context"
import { withRoomConsumer } from "../Context"
import Loading from "./Loading"


function RoomContainer({ context }) {
  const { rooms, sortedRooms, loading } = context;
  if (loading) { return (<Loading />) }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}







export default withRoomConsumer(RoomContainer)
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const { loading, sortedRooms, rooms } = value
//           if (loading) { return (<Loading />) }
//           return (
//             <div>
//               <RoomFilter rooms={rooms} />
//               <RoomList rooms={sortedRooms} />
//             </div>
//           )
//         }
//       }
//     </RoomConsumer>
//   )
// }
