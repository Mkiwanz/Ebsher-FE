import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          <div className="col-12 mb-4 px-4">
            <div
              className="row mb-5 p-4"
              style={{ background: (256, 256, 256, 0.05) }}
            >
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Our Office
                  </h5>
                  <p className="mb-4 m-md-0">Al-Hashmi Street, Irbid, Jordan</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Email Us
                  </h5>
                  <p className="mb-4 m-md-0">Info@Ebsher-solar.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Call Us
                  </h5>
                  <p className="m-0">+962 7 7755 2904</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <p>Follow Us in Social Media</p>
                <div className="d-flex justify-content-start mt-4">
                  {/* <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="https://www.facebook.com/Ebsher.co"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  {/* <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a> */}
                  {/* <a
                    className="btn btn-lg btn-outline-light btn-lg-square"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a> */}
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Our Products
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Solar System
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Wind Turbine
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Wind Generator
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Solar Energy
                  </a>
                  <a className="text-white btn-scroll" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Solar Panel
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: (256, 256, 256, 0.05) }}
      >
        <p className="m-0 text-white">
          &copy; <a href="#">Ebsher</a>. All Rights Reserved. Designed by Mohammad Kiwan{" "}
        </p>
      </div>
    </div>
  );
};
