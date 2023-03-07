const ServicesProvided = () => {
  return (
    <div className="container-fluid py-5" id="service">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: 3 }}
          >
            Services
          </h6>
          <h1 className="font-secondary display-4">What We Cover</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src={require("../../Resources/img/product-1.jpg")}
                />
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">On Grid Solar Systems </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src={require("../../Resources/img/carousel-2.jpg")}
                />
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">Off Grid Solar Systems</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src={require("../../Resources/img/gallery-3.jpg")}
                />
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">Solar water pumping systems</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src={require("../../Resources/img/product-3.jpg")}
                />
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">Cleaning Services</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesProvided;
