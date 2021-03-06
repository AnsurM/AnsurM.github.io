import React from "react";

export default function index() {
  return (
    <section className="mh-home" id="mh-home">
      <div className="home-ovimg">
        <div className="container">
          <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
            <div className="col-sm-6">
              <div className="mh-header-info">
                <div
                  className="mh-promo wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  <span>Hello I'm</span>
                </div>
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  Syed Ansur Mehdi
                </h2>
                <h4
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  Full Stack Developer
                </h4>
                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <i className="fa fa-envelope" />
                    <a href="mailto:">ansurmehdi@gmail.com</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <i className="fa fa-phone" />
                    <a href="callto:">+92 323 250 0966</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-map-marker" />
                    <address>Karachi, Sindh, Pakistan.</address>
                  </li>
                </ul>
                <ul
                  className="social-icon wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="hero-img wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.6s"
              >
                <div className="img-border">
                  <img src="assets/images/hero.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
