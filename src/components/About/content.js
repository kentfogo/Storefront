import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import fam from "./fam.jpg"
import community from "./community.jpg"
import "./ContentElements.css"


const AboutPage = () => {
  return(
    <>
    <div className = "about-wrapper">
      <div className = "about-container">
        <div className = "a-container">
          <img src={ fam } />
        </div>
        <div className = "a-container">
          <h2>It starts with getting baked with family...</h2>
          <p>Sodales volutpat aptent, turpis diam, tortor potenti
          nunc erat varius tempus sapien. Lobortis at dictumst,
          hac nullam congue odio eu. Turpis dolor placerat, metus
          mattis eget sed aenean. Donec dapibus pretium, praesent
          aenean porta habitant eu. Cursus condimentum libero ut,
          massa vivamus inceptos, per tortor at purus aliquet torquent.
          Litora curabitur fames, per cras, id curae dapibus laoreet gravida.
          Inceptos ultricies eget, habitant accumsan potenti ut.
          Interdum tincidunt vivamus, ornare sit nam vehicula venenatis.
          Aptent risus augue ultricies, faucibus sem tincidunt accumsan
          suscipit. Lacus curae torquent ornare, a blandit fusce,
          risus id sit etiam nec eros potenti enim.</p>
        </div>
      </div>
      <div className = "c-wrapper">
      <img src = {community} class="pic" />
        <h2>Community</h2>
          <p>Enim Elit Himenaeos Cursus Cursus Turpis Vivamus Habitasse Pretium Massa Ipsum Vel Sociosqu Tempus Torquent Accumsan Cubilia Curae Iaculis A</p>
          <p>Enim Elit Himenaeos Cursus Cursus Turpis Vivamus Habitasse Pretium Massa Ipsum Vel Sociosqu Tempus Torquent Accumsan Cubilia Curae Iaculis A</p>
          <p>Enim Elit Himenaeos Cursus Cursus Turpis Vivamus Habitasse Pretium Massa Ipsum Vel Sociosqu Tempus Torquent Accumsan Cubilia Curae Iaculis A</p>
          <div className = "apply-container">
            <h2>Work with Us</h2>
            <p>Download an Application</p>
            <button>Application</button>
          </div>
      </div>
    </div>
    </>
  );
};

function Family() {
  return (
    <StaticImage
    src="./fam.jpg"
    placeholder="blurred"
    loading="eager"
      />
    )
}


export default AboutPage;
