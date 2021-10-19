import React from "react"
import "./service.css"

const Service = (props) => {
  const { name, image, details } = props.service
  return (
    <div className="service col-lg-4 col-md-6 col-12">
      <div className="bgcolor">
        <img className="service-img" src={image} alt="" />
        <h3 className="text-info">{name}</h3>
        <p>{details}</p>
        <button className="btn-success rounded-3">Learn More</button>
      </div>
    </div>
  )
}




// id,

export default Service
