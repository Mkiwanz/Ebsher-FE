import { useState } from "react";

const AboutUs = () => {
  const [isFullTextDisplayed, setIsFullTextDisplayed] = useState(false);
  const text =
    "Welcome to Ebsher, a premier provider of solar energy systems for homes and businesses. Our company was founded in 2016 with a mission to bring affordable and reliable renewable energy solutions to our customers. At Ebsher, we believe in the power of the sun and its ability to transform the way we generate and consume energy. Our team of experienced professionals is dedicated to helping our customers harness this power to reduce their energy costs, increase their energy independence, and contribute to a more sustainable future. Our solar energy systems are designed with the latest technology to maximize efficiency and performance. We offer a range of options to fit any property size or type, from small residential systems to large commercial installations. Our team works closely with our customers to design a customized solution that meets their specific energy needs and budget. We pride ourselves on providing exceptional customer service and support. Our team is available to answer questions and provide assistance throughout the entire process, from consultation to installation and beyond. We also offer maintenance and monitoring services to ensure that our customers' solar energy systems continue to operate at peak performance. At Ebsher, we are committed to social responsibility and making a positive impact on the world. We are involved in various community initiatives that align with our values and promote sustainability. We also strive to reduce our own carbon footprint by using eco-friendly materials and practices in our operations. Thank you for considering Ebsher for your solar energy needs. We look forward to helping you achieve your energy goals and contribute to a more sustainable future.";

  function toggleFullTextDisplay() {
    setIsFullTextDisplayed(!isFullTextDisplayed);
  }
  const shortenedText = text.substring(0, 380) + "...";

  return (
    <div className="container-fluid py-5" id="about">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              className="img-fluid mb-4 mb-lg-0"
              src={require("../../Resources/img/about.jpg")}
            />
          </div>
          <div className="col-lg-7">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              About Us
            </h6>
            <h1 className="display-4 mb-3">
              <span className="text-primary">7+ Years Experience</span> In Solar
              Power Industry
            </h1>
           
            {/* <a
              className="btn btn-primary font-weight-bold py-3 px-5 mt-2"
              type="button"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Read More
            </a> */}
            {isFullTextDisplayed ? text : shortenedText}
            <button
              onClick={toggleFullTextDisplay}
              className="btn btn-primary font-weight-bold py-3 px-5 mt-2"
            >
              {isFullTextDisplayed ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
