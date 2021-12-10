import React from "react";
import "./cardelements.scss"

const Card = () =>{
  return(
    <div className="wrapper">
      <CardDetail

      img="./images/gallery1.jpg"
      title="title Test"
      description="d test"
      />

      <CardDetail

      img="./images/gallery2.jpg"
      title="title Test"
      description="d test"
      />

      <CardDetail

      img="./images/gallery3.jpg"
      title="title Test"
      description="d test"
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
