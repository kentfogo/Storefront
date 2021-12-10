import React from "react";
import "./cardelements.scss"
import { ApplePie } from "../components/images.js"

const Card = () =>{
  return(
    <div className="wrapper">
      <CardDetail

      img={ApplePie}
      title="Apple Pie"
      description="MMM America's Favorite"
      />

      <CardDetail

      img="./images/pearpie.jpg"
      title="Pear Pie"
      description="Take...a Pear..."
      />

      <CardDetail

      img="./images/bluepie.jpg"
      title="Blueberry Pie"
      description="Made from the finest blueberries"
      />
    </div>
  )
}

const CardDetail = (props) =>{
  return(
    <>
      <div className="card">
        <div className="card__body">
          <img src={props.img}
          class="card__image"/>
          <h2 className="card__title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
        </div>
          <button className ="card__btn">View</button>
      </div>

    </>
  );
};

export default Card;
