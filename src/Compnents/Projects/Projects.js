import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={
          project.images != null && project.images.length > 0&& project.images[0] != null
            ? project.images[0].path
            : null
        }
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("api/v1/projects");
        setProjectsData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProjects();
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={345}
      naturalSlideHeight={220}
      totalSlides={projectsData.length}
      visibleSlides={3}
    >
      <Slider>
        {projectsData.map((project, index) => (
          <Slide index={index} key={project.id}>
            <ProjectCard project={project} />
          </Slide>
        ))}
      </Slider>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        onClick={() => Slider.previous()}
      >
        <ButtonBack />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        onClick={() => Slider.next()}
      >
        <ButtonNext />
      </IconButton>
    </CarouselProvider>
  );
}

export default Projects;
