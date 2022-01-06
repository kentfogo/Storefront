import React, { useState } from "react";
import "./cardelements.scss"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import App from "../carttest/app"


const Card = () =>{
  return(
    <>
    <div className="title-card">
      <h1>Pies</h1>
    </div>
    <div className="wrapper">
      <CardDetail
      img="https://images.unsplash.com/photo-1588227071345-751a485e2f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      title="Apple Pie"
      description="MMM America's Favorite"
      />

      <CardDetail

      img="https://images.unsplash.com/photo-1512398050999-49576a8dac80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
      title="Pear Pie"
      description="Take...a Pear..."
      />

      <CardDetail

      img="https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      title="Blueberry Pie"
      description="Made from the finest blueberries"
      />
    </div>
    <div className="title-card">
      <h1 className="second">Cookies</h1>
    </div>
    <div className="wrapper">
      <CardDetail
      img="https://images.unsplash.com/photo-1608512110840-74b4dce46dd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      title="SnickerDoodle"
      description="Baked Boys Famous Snickerdoodles"
      />

      <CardDetail

      img="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      title="Chocolate Chunk"
      description="Our take on the classic"
      />

      <CardDetail
      img="https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      title="Spiced Cookies"
      description="Made from the finest blueberries"
      />
    </div>
    </>

  )
}

const CardDetail = (props) =>{

const [buttonPopup, setButtonPopup] = useState(false);

  return(
    <>
      <div className="card">

        <div className="card__body">
          <img src={props.img}
          class="card__image"/>
          <h2 className="card__title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
        </div>

          <button onClick={() => setButtonPopup(true)}className ="card__btn" >Add to Cart</button>
          <aside>
            <App trigger={buttonPopup} setTrigger={setButtonPopup} />
          </aside>
      </div>

    </>
  );
};

export default Card;
