import React from "react";
import "./Port.css";
function Port() {
  return (
    <>
      <div id="colorlib-page">
        <div className="container-wrap">
          <a
            className=" tog js-colorlib-nav-toggle colorlib-nav-toggle active"
            // data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
            href="#"
          >
            <i></i>
          </a>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="d-flex flex-column">
              <div className="author-img">
                <img
                  className="author-img"
                  src="..\..\Assets\Images\Fel.jpg"
                  alt=""
                />
              </div>
              <h1 className="colorlib-logo">
                <a href="fg">Felix C</a>
              </h1>
              <span className="text-center">Python Full Stack Developer</span>
            </div>
            <nav id="colorlib-main-menu" className="navbar" role="navigation">
              <div id="navbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="active hvr-underline-from-center" href="">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="active hvr-underline-from-center" href="">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="active hvr-underline-from-center" href="">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="active hvr-underline-from-center"
                      href="colorlib-education"
                    >
                      Education
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="active hvr-underline-from-center" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>Copyright @ 2023 all rights reserved</small>
                <br />
                <a href="#">felixdbccs@gmail.com</a>
                <p>91+ 6360070160</p>
              </p>
            </div>
          </aside>
          <div className="colorlib-main">
            <section id="colorlib-hero">
              <div className="desc">
                <h1 className="name">
                  Hi ! <br /> I'm Felix
                </h1>
              </div>
            </section>
            <section className="colorlib-about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="row row-botton-padded-sm animate-box fadeInleft animated"
                      data-animate-effect="fadeInleft"
                    >
                      <div className="Ab col-md-12">
                        <div className="about-desc">
                          <span className="heading-meta">About me</span>
                          <h1 className="colorlib-heading"> Who am I?</h1>
                          <br />
                          <p className="ptags text-start">
                            <strong>Hi I'm Felix </strong>
                            Seeking a beginner role to enhance and explore my
                            technical knowledge gained at Thiruvalluvar
                            University in the last three years. I hold a B.Sc
                            degree from Don Bosco college and won the quiz
                            challenge held at the campus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <section className="colorlib-skill">
              <div className="spe colorlib-narrow-content">
                <div className="row">
                  <div
                    className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInleft"
                  >
                    <span className="heading-meta">My Speciality</span>
                    <h2 className="colorlib-heading">Competencies</h2>
                  </div>
                </div>
                <br />
                <div className="row">
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
                          className="img-fluid h-50 fade-in-left "
                          src="..\..\Assets\Images\api.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <br />
            {/* bvjhghjghjgvhjgvhv */}
            <section className="colorlib-education">
              <div className=" edu colorlib-narrow-content">
                <div className="row">
                  <div
                    className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <span className="heading-meta">Education</span>
                    <h2 className="colorlib-heading">education</h2>
                  </div>
                  <br />
                  <br />
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box fadeInLeft"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Port;
