import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"
import Herocard from "./Herocard"

const Hero = () => {
  return (
    <div>
      <section className="showcase px-4">
        <div className="overlay">
          <h1 className="text-light">
            We are Always here to{" "}
            <span className="fw-bold text-warning">Serve You.</span>
          </h1>
          <div className="apointment">
            <Link to="/contact">Make an Apointment </Link>
          </div>
        </div>
      </section>
      <Herocard></Herocard>
    </div>
  )
}

export default Hero
