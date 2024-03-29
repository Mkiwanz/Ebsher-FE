import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";
import "./NewProject.css";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../NavBar/MyNavbar";
import StepCompletionLine from "../StepCompletionLine/StepCompletionLine";
import Cookies from "js-cookie";
import { Footer } from "../Footer/Footer";

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get("isLoggedIn");
  const accessToken = Cookies.get("accessToken");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      projectDescription: projectDescription,
      location: location,
      date: date,
      note: note,
    };
    axios
      .post("/api/v1/projects", data)
      .then((res) => {
        navigate(`/uploadProjectImages/${res.data}`);
      })
      .catch((err) => console.log(err));

    setTitle("");
    setDescription("");
    setProjectDescription("");
    setLocation("");
    setDate("");
    setNote("");
  };

  return (
    <div>
      <MyNavbar />
      <br />
      <br />
      <br />
      <StepCompletionLine currentStep={1} />
      <br />
      <br />
      <br />
      <Box
        component="form"
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      <Footer />
    </div>
  );
};
export default NewProject;
