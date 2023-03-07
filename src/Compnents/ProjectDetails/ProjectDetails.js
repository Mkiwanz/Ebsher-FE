import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import ImageSlider from "../ImageSlider/ImageSlide";
import MyNavbar from "../NavBar/MyNavbar";

function ProjectDetails() {
  const [projectDetails, setProjectDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`api/v1/projects/${id}`)
      .then((res) => {
        setProjectDetails(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <MyNavbar />
      <br />
      <br />
      <br />
      <div className="project-details">
        {projectDetails.images ? (
          <ImageSlider slides={projectDetails.images} />
        ) : null}
        <br />
        <br />
        <h1>{projectDetails.title}</h1>
        <p>{projectDetails.description}</p>
        <p>{projectDetails.projectDescription}</p>
        <p>{projectDetails.location}</p>
        <p>{projectDetails.date}</p>
        <p>{projectDetails.note}</p>
        {/* <div className="image-list">
        {projectDetails.images
          ? projectDetails.images.map((image) => (
              <img key={image} src={image.path} alt="Project Image" />
            ))
          : null}
      </div> */}
      </div>
    </div>
  );
}

export default ProjectDetails;
