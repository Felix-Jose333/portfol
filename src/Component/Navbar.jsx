import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light sidebar-bg  fixed-top">
          <div className="container-fluid">
            <svg viewBox="0 0 960 300">
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="80%">
                  FELIX
                </text>
                <text textAnchor="middle" x="52%" y="80%">
                  FELIX
                </text>
              </symbol>
              <h1>Python Full Stack Developer</h1>
              <g className="g-ants">
                <use xlinkHref="#s-text" className="text-copy" />
                <use xlinkHref="#s-text" className="text-copy" />
                <use xlinkHref="#s-text" className="text-copy" />
                <use xlinkHref="#s-text" className="text-copy" />
                <use xlinkHref="#s-text" className="text-copy" />
              </g>
            </svg>
            {/* <h1>Python Full Stack Developer</h1> */}

            <p
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </p>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className=" navbar-nav ml-5">
                <li className="nav-item h3">
                  <a
                    className="nav-link active hvr-underline-from-center "
                    aria-current="page"
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item h3">
                  <a
                    className="nav-link active hvr-underline-from-center "
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item h3">
                  <a
                    className="nav-link active hvr-underline-from-center "
                    href="#Skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item h3">
                  <a
                    className="nav-link active hvr-underline-from-center "
                    href="#Education"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item h3">
                  <a
                    className="nav-link active hvr-underline-from-center "
                    href="#Project"
                  >
                    Project
                  </a>
                </li>
                <li className="nav-item h3">
                  <a
                    className=" nav-link active hvr-underline-from-center "
                    href="#Contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <div className="container-fluid">
        <div className="row bg-info ">
          <div className="col-sm-6 col-md-6 p-5 mt-60">
            <div className="">
              <h1 className="py display-1">Python Full Stack Developer</h1>
              <p className="h1 hi">
                <span className="sp">Hi,</span>
                <span className="sp">I am </span>
                <span className="sp">Felix</span>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 img-fluid">
            <img
              className="img-fluid"
              src="..\..\Assets\Images\Fel.jpg"
              alt=""
            />
          </div>
        </div>
     
        <div className="row">
          <div className="ed col-sm-4 h1 text-center">
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>P</span>
            <span>E</span>
            <span>T</span>
            <span>E</span>
            <span>N</span>
            <span>C</span>
            <span>I</span>
            <span>E</span>
            <span>S</span>
          </div>
          <div className="col mt-5">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\Python.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\React.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\HTML.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\css.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\Bootstrap.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\django.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\Js.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50 fade-in-left"
                  src="..\..\Assets\Images\api.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="ed col-sm-4 h1 text-center ">
            <span>E</span>
            <span>D</span>
            <span>U</span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </div>
          <div className="col-sm-8 mt-5">
            <hr></hr>
            <h1 className="com display-3">B.Sc Computer Science - 73%</h1>
            <p>June 2019 - July 2022</p>
            <p>
              At Thiruvalluvar University in Don Bosco College(Co-Ed) -
              Yelagiri,TN
            </p>
            <hr></hr>
            <h1 className="com display-3">HSC - 63%</h1>
            <p>June 2017 - April 2018</p>
            <p>Adaikkala Annai Hr.Sec School</p>
            <hr></hr>
            <h1 className="com display-3">SSLC - 81%</h1>
            <p>June 2016 - April 2017</p>
            <p>St.Michael's High School</p>
            <hr></hr>
          </div>
        </div>
        
        <div className="row">
          <div className="ed col-sm-4 h1 text-center">
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>

            <span>H</span>
            <span>I</span>
            <span>G</span>
            <span>H</span>
            <span>L</span>
            <span>I</span>
            <span>G</span>
            <span>H</span>
            <span>T</span>
            <span>S</span>
          </div>
          <div className="col-sm-8 mt-5">
            <h1 className="display-4 fade-in-left">Ability to learn Quickly</h1>
            <h1 className="display-4"> Strong Decision Maker</h1>
            <h1 className="display-4"> Programming Skills</h1>
            <h1 className="display-4"> Complex Problem Solver</h1>
            <h1 className="display-4"> Team Player</h1>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
