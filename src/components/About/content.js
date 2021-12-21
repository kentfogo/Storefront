import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import fam from "./fam.jpg"
import community from "./community.jpg"
import {aboutWrapper, aboutContainer, aContainer, cWrapper, cText, pWrapper, workContainer, applyContainer, pic, buttonWrapper} from "./ContentElements.module.css"
import staff from "./staff.jpg"


const AboutPage = () => {
  return(
    <>
    <div className = {aboutWrapper}>
      <div className = {aboutContainer}>
        <div className = {aContainer}>
          <img src={ fam } />
        </div>
        <div className = {aContainer}>
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
      <div className = {cWrapper}>
        <img src = {community} className={pic} />
        <div className = {cText}>
          <h2>Community</h2>
        </div>
        <div className = {pWrapper}>
          <p>Enim Elit Himenaeos Cursus Cursus Turpis Vivamus Habitasse Pretium Massa Ipsum Vel Sociosqu Tempus Torquent Accumsan Cubilia Curae Iaculis A</p>
          <p>Enim Elit Himenaeos Cursus Cursus Turpis Vivamus Habitasse Pretium Massa Ipsum Vel Sociosqu Tempus Torquent Accumsan Cubilia Curae Iaculis A</p>
          <p>Enim Elit Himenaeos Cursus Cursus Turpis Vivamus Habitasse Pretium Massa Ipsum Vel Sociosqu Tempus Torquent Accumsan Cubilia Curae Iaculis A</p>
        </div>

          <div className = {workContainer}>
            <img src={staff} />
            <div className = {applyContainer}>
             <h2>Work with Us</h2>
             <div className = {buttonWrapper}>
             <p>Download an Application</p>

              <button>Application</button>
             </div>
           </div>
          </div>


      </div>
    </div>
    </>
  );
};




export default AboutPage;
