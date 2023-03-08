import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import ImageSlider from "../ImageSlider/ImageSlide";
import MyNavbar from "../NavBar/MyNavbar";
import Cookies from "js-cookie";
import { Divider, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Footer } from "../Footer/Footer";

function ProjectDetails() {
  const [projectDetails, setProjectDetails] = useState({});
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
      <div className="m-top">
        <Grid container spacing={2}>
          <Grid xs={7}>
            <div>
              {projectDetails.images ? (
                <ImageSlider slides={projectDetails.images} />
              ) : null}
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem>
            Details
          </Divider>
          <Grid xs={3}>
            <div className="ml-4 mt-4">
              <Typography variant="h4" component="h2">
                <h1 className="section-title position-relative text-center">
                  {" "}
                  {projectDetails.title}
                </h1>
              </Typography>
              <Divider variant="middle" dark />
              <br />
              <Typography color="text.secondary" component="h2">
                <b>Location:</b> {projectDetails.location}
              </Typography>
              <br />
              <Typography color="text.secondary" component="h2">
                <b>Date:</b> {projectDetails.date}
              </Typography>
              <br />
              <Typography color="text.secondary" component="h2">
                <b>Note:</b> {projectDetails.note}
              </Typography>
              <br />
              <Accordion
                expanded={expanded === "descriptionPanel"}
                onChange={handleChange("descriptionPanel")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="descriptionPaneLbh-content"
                  id="descriptionPaneLbh-header"
                >
                  <Typography sx={{ width: "50%", flexShrink: 0 }}>
                    Project Description
                  </Typography>
                  {/* <Typography sx={{ color: "text.secondary" }}>
              {projectDetails.description}
              </Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{projectDetails.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              {isLoggedIn ? (
                <button onClick={handelDeleteProject}>Remove Project</button>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
