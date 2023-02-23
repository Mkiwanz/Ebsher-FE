import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Project(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ borderRadius: 15 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={
            props.project.photos === null ||
            props.project.photos === undefined ||
            props.project.photos.length === 0
              ? projectImage
              : props.project.photos[0]
          }
          alt="Kiwan"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${props.project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.project.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.project.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Project;
