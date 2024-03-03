import React from 'react'
import "./Footer.css";
const Footer = () => {
    return (
        <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInLeftBig delay-0.3">
            <img className="ml-5" src="images/footl.png" alt="Logo" style={{width: '100px', height: '80px'}} /><br /><br /><br />
            <p className="ml-5">If you are going to use a passage of<br />need to be sure there isn't anything<br />hidden in the middle of the text.</p>
            <p style={{color: '#ff7b00', fontWeight: 'bold'}} className="ml-5">If you are going to use a passage <br />need to be sure there isn't</p><br />
            <button className="face ml-5"><i className="fa fa-facebook" aria-hidden="true" style={{color: 'blue'}} /></button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="face1"><i className="fa fa-pinterest-p" aria-hidden="true" style={{color: 'red'}} /></button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="google"><i className="fa fa-globe" aria-hidden="true" style={{color: 'pink'}} /></button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="twit"><i className="fa fa-twitter" aria-hidden="true" style={{color: 'rgb(31, 72, 185)'}} /></button>
          </div>
          <div className="col-lg-4 col-md-12 csol-sm-12 wow fadeInDownBig delay-0.3">
            <div className="custom-18 ml-5">
              <h4 style={{fontWeight: 'bold', marginTop: '25px'}}>Contact Us:</h4>
              <button className="sp1" />
              <button className="sp2" />
              <button className="sp3" /><br /><br /><br />
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
                  <button className="face3 mt-3"><i className="fa fa-phone" aria-hidden="true" style={{color: '#ff7b00'}} /></button>
                  <div className="div7 mt-4"><button className="face3 mt-3"><i className="fa fa-envelope" aria-hidden="true" style={{color: '#ff7b00'}} /></button></div>
                  <div className="div7 mt-4"><button className="face3 mt-3"><i className="fa fa-map-marker" aria-hidden="true" style={{color: '#ff7b00'}} /></button></div>  
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 justify-content-start">
                  <p className="mt-3 ml-n5">02 697 864 56 <br />+880 659 468</p>
                  <p className="mt-4 ml-n5">support@gmail.com <br />hotte24@gmail.com</p>
                  <p className="mt-5 ml-n5">855 Road,Brokley street <br />New york 600,Barboo<br />Wisconsin(WI)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInRightBig delay-0.3">
            <div className="custom-16 mt-4">
              <div className="custom-17  text-center" />
              <h3 className="head pt-3 pl-4 ">Opening Hours:</h3>
              <p className="para15 pt-3 pl-4">Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: 'rgb(229, 19, 19)'}}>Closing Day</span></p>
              <p className="para15 pl-4">Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>08 AM - 10 PM</span></p>
              <p className="para15 pl-4">Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>08 AM - 10 PM</span></p>
              <p className="para15 pl-4">Wednesday&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>08 AM - 10 PM</span></p>
              <p className="para15 pl-4" style={{color: '#ff7300'}}>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>08 AM - 10 PM</span></p>
              <p className="para15 pl-4">Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>08 AM - 10 PM</span></p>
              <p className="para15 pl-4 pb-5">Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>08 AM - 10 PM</span></p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer