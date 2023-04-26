import React from "react";
import "./Hover.css";
import Navbar from "./Navbar";
function Hover() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br /> <br />
      <div className="cla" fluid>
        <div className="cont container xs-container-fluid">
          <div className="row d-flex f-bg   " id="Home">
            <div className="col-md-5 name text-start">
              <p className="ptag fw-bolder">
                Hi ! <br />I am Felix
              </p>
              <p className="htag">
                Python Full Stack
                <br />
                Developer
              </p>
              <div>
                <button
                  className="send-btn hvr-bounce-to-left"
                  type="button"
                  value="Send Message"
                >
                  Download CV
                </button>
              </div>
            </div>
            <div className="col-md-7 p-5">
              <img
                className="img-fluid felix"
                src="..\..\Assets\Images\F.png"
                alt=""
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row ">
            <div className="col ">
              <span id="About" className="stitle" style={{ color: "#999999" }}>
                About Me
              </span>
              <br />
              <br />
              <h3 className="title">WHO AM I ?</h3>
              <br />
              <br />

              <p className="ptags text-start lh-lg fs-4">
                <strong>Hi I'm Felix </strong>I am coming from kallakurichi
                currently staying in babusapalya Bangalore.I am a B.Sc graduate
                specialized in computer science at Thiruvalluvar University in
                Don Bosco College of arts and science.Additionally I have done a
                Python Full Stack course in Bosco Soft Technologies at yelagir.
                Along with my course I have done a project named Supermarket
                Online Shopping.My skills are Python, React Js, Django, HTML
                CSS, JavaScript,Bootstrap, RestApi
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="">
              <span id="Skills" className="stitle" style={{ color: "#999999" }}>
                My Speciality
              </span>
              <br />
              <br />
              <h3 className="title">MY SKILLS</h3>
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5  a">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\Python.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 a col-md-3 im  p-5 ">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\React.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5   a">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\django.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5   a">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\HTML.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5   a">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\c.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5   a">
              <img
                className="img-fluid"
                src="..\..\Assets\Images\j.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5  a">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\B.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-3 im p-5   a">
              <img
                className="img-fluid "
                src="..\..\Assets\Images\api.webp"
                alt=""
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="">
              <span
                id="Education"
                className="stitle"
                style={{ color: "#999999" }}
              >
                Education
              </span>
              <br />
              <br />
              <h3 className="title">EDUCATION</h3>
              <br />
              <br />
            </div>
            <div className="col-12 g-5 ">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="row accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="bt accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <h4>B.Sc Computer Science</h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <h2> Don Bosco College (Co-Ed)</h2>
                      <h3>2019-2022</h3>
                      <h4> Yelagiri, TN.</h4>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="bt accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <h4>HSC</h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <h2> Adaikala Annai Hr.Sec School </h2>
                      <h3>2017-2018</h3>
                      <h4>Viriyur, TN.</h4>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row  accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="bt accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <h4>SSLC</h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <h2> St Michaels High School </h2>
                      <h3>2016-2017</h3>
                      <h4>Michaelpuram, TN.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="">
              <span
                id="Project"
                className="stitle"
                style={{ color: "#999999" }}
              >
                My Work
              </span>
              <br />
              <br />
              <h3 className="title">PROJECT</h3>
              <br />
              <br />
            </div>
            <div>
              <p className="h2">Supermarket online shopping</p>
              <br />
              <p className="h4">
                I have successfully developed a supermarket e-commerce website
                using REACT JS, Python, Django, and Postgre SQL. The website
                includes key features such as product ordering, cart addition,
                order manipulation, alert product delivery, and secure user
                authentication for login.
              </p>
              <br />
              <button
                src="..\..\Assets\Images\B.png"
                type="button"
                className="hvr-bounce-to-right"
              >
                Visit Here
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div id="Contact" className="row">
            <div className="">
              <span className="stitle" style={{ color: "#999999" }}>
                Contact
              </span>
              <br />
              <br />
              <h3 id="" className="title">
                CONTACT
              </h3>
              <br />
              <br />
            </div>
            <div className="col-md-6">
              <br />
              <div>
                <label className="h1" htmlFor="">
                  Name
                </label>
                <br />
                <br />
                <input
                  className="in"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <br />
              <div>
                <label className="h1" htmlFor="">
                  E-mail
                </label>
                <br />
                <br />
                <input
                  className="in"
                  type="email"
                  placeholder="Enter your E-mail"
                  required
                />
              </div>
              <br />
              <div>
                <label className="h1 " htmlFor="">
                  Message
                </label>
                <br />
                <br />
                <input
                  className="inp"
                  type="text"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <button
                  className="send-btn hvr-bounce-to-left"
                  type="button"
                  value="Send Message"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <div className="d-flex">
                <div></div>

                <h4>felixdbccs@gmail.com</h4>
              </div>
              <br />
              <br />
              <div>
                <h4>6360070160</h4>
              </div>
              <br />
              <br />
              <div>
                <i className="fa fa-linkedin-square" style={{ fontSize: 36 }} />
              </div>
              <div>
                <p>
                  © Copyright ©2023 All rights reserved | This is made with love
                  by Felix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hover;
