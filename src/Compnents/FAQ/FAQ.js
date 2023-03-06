const FAQs = () => {
  return (
    <div className="container-fluid py-5" id="faqs">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: 3 }}
          >
            FAQs
          </h6>
          <h1 className="display-4">You Should Know</h1>
        </div>
        <div className="row">
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
              <h3 className="mb-4">Why Switch to Solar?</h3>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                <b>Save money on your energy bills:</b> Solar panels allow you
                to generate your own electricity, reducing or even eliminating
                your reliance on the grid.
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                <b>Increase the value of your property:</b> Installing solar
                panels on your home or business can increase its value.
                Potential buyers may be willing to pay more for a property with
                solar panels already installed.
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                <b>Reduce your carbon footprint:</b> Solar energy is a clean and
                renewable source of energy, which means it does not produce
                harmful emissions that contribute to climate change.
              </h5>
              <h5 className="mb-0">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                <b>Energy independence:</b> Generating your own electricity
                means that you become less reliant on the grid and the utility
                companies.
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3">
              <h3 className="mb-4">Why Choose Us?</h3>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                <b>Expertise:</b> Our team of experienced professionals has the
                knowledge and expertise to design and install the best solar
                energy system for your specific needs
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                <b>Quality:</b> We use only the highest quality solar panels and
                components to ensure that your system is reliable and
                long-lasting
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                <b>Social Responsibility:</b> We are dedicated to promoting
                sustainability and reducing our own carbon footprint. We are
                involved in various community initiatives that align with our
                values and promote environmental responsibility.
              </h5>
              <h5 className="mb-0">
                <i className="fa fa-check text-success mr-2"></i>
                <b>Customer Service:</b> We are committed to providing
                exceptional customer service and support throughout the entire
                process, from consultation to installation and beyond.
              </h5>
            </div>
          </div>
          <div className="col-md-12 text-center pt-3">
            <a
              className="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll"
              href="#contact"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQs;
