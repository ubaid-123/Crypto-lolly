import React from 'react';
import image1 from "./images/s1.jpg";
import image2 from "./images/s2.jpg";
import image3 from "./images/s3.jpg";
import AddLolly1 from './AddLolly1';

function Home(){
  
    return(
        <div >

        <br/>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol  className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0"  className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div  className="carousel-inner">
      <div  className="carousel-item active">
        <img  className="d-block w-100" src={image1} style={{height:'600px'}} alt="First slide"/>
      </div>
      <div  className="carousel-item">
        <img  className="d-block w-100" src={image2} style={{height:'600px'}} alt="Second slide"/>
      </div>
      <div  className="carousel-item">
        <img  className="d-block w-100" src={image3} style={{height:'600px'}} alt="Third slide"/>
      </div>
    </div>
    <a  className="carousel-control-prev" href="#carouselExampleIndicators"  role="button" data-slide="prev" >
      <span  className="carousel-control-prev-icon" aria-hidden="true" ></span>
      <span  className="sr-only">Previous</span>
    </a>
    <a  className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span  className="carousel-control-next-icon" aria-hidden="true" style={{color:'#000080'}}></span>
      <span  className="sr-only">Next</span>
    </a>
  </div>

  <AddLolly1/>
  </div>
  
    )
}

export default Home;
