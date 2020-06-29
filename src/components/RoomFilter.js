import React from 'react'
import Title from "./Title"
import { useContext } from "react"
import { RoomContext } from "../Context"

// get all unique values 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, size, minSize, maxSize, pets, breakfast } = context;
  // get unique type
  let types = getUnique(rooms, "type");
  types = ["all", ...types]
  // get unique capacity
  let capacities = getUnique(rooms, "capacity")
  return (
    <section className="filter__container">
      <Title name="search rooms" />
      <form className="filter__form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types.map((type, index) => <option key={index} value={type}> {type} </option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
            {capacities.map((capacity, index) => <option key={index} value={capacity}> {capacity} </option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price $ {price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-container">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra"><input type="checkbox" checked={breakfast} name="breakfast" id="breakfast" onChange={handleChange} /> <label htmlFor="breakfast">breakfast</label></div>
          <div className="single-extra"><input type="checkbox" checked={pets} name="pets" id="pets" onChange={handleChange} /> <label htmlFor="pets">pets</label></div>
        </div>
      </form>
    </section>
  )
}
