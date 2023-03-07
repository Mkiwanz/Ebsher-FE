import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import ImageSlider from "../ImageSlider/ImageSlide";
import MyNavbar from "../NavBar/MyNavbar";
import Cookies from "js-cookie";

function ProjectDetails() {
  const [projectDetails, setProjectDetails] = useState({});
  const { id } = useParams();
  const isLoggedIn = Cookies.get("isLoggedIn");
  const navigate = useNavigate();

  const handelDeleteProject = () => {
    axios
      .delete(`api/v1/projects/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

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
        {isLoggedIn ? (
          <button onClick={handelDeleteProject}>Remove Project</button>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectDetails;
