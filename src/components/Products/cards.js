import React from "react";

const Card = (props) =>{
  return(
    <>
    <div className="card">
      <div className="card-body">
        <img src={props.img} />
        <h2 className="card-title"></h2>
        <p className = "card-btn">View</p>

      </div>
    </div>
    </>
  );
};

export default Card;
