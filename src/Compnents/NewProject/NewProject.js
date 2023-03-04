import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";

import "./NewProject.css";

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
    const selectedPreviewImages = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );
    setPreviewImages([...previewImages, ...selectedPreviewImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = document.querySelector("form");
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    images.forEach((image) => formData.append('images', image));
    formData.append('projectDescription', projectDescription);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('note', note);
    const data = {
      title: title,
      description: description,
      projectDescription: projectDescription,
      location: location,
      date: date, // formatted as a string in ISO 8601 format
      note: note,
      images: images, // array of image files
    };
    console.log(formData);
    axios
      .post("/api/v1/projects", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // setTitle("");
    // setDescription("");
    // setProjectDescription("");
    // setLocation("");
    // setDate("");
    // setNote("");
    // setImages([]);
    // setPreviewImages([]);
  };

  return (
    <Box
      component="form"
      className="form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Typography variant="h4" align="center" gutterBottom>
        New Project
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        value={description}
        onChange={handleDescriptionChange}
      />
      <TextField
        label="Project Description"
        variant="outlined"
        multiline
        rows={4}
        value={projectDescription}
        onChange={handleProjectDescriptionChange}
      />
      <TextField
        label="Location"
        variant="outlined"
        value={location}
        onChange={handleLocationChange}
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={handleDateChange}
      />
      <TextField
        label="Note"
        variant="outlined"
        multiline
        rows={4}
        value={note}
        onChange={handleNoteChange}
      />
      <label>
        <Typography variant="subtitle1" gutterBottom>
          Images
        </Typography>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </label>
      <div className="image-preview">
        {previewImages.map((image) => (
          <img src={image} alt="" key={image} />
        ))}
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};
export default NewProject;
