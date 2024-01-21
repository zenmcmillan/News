import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({title, image, description, date, id}) {
  return (
    <div className="card">
      <h3 className="card-info">
        <Link to={`${id}`}>{title}</Link>
      </h3>
      <img src={image} />
      <p className="card-info">{description}</p>
      <p>{date}</p>
    </div>
  );
}
