import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import StepCompletionLine from "../StepCompletionLine/StepCompletionLine";
import Cookies from "js-cookie";
import MyNavbar from "../NavBar/MyNavbar";
import { Footer } from "../Footer/Footer";

const UploadProjectImages = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get("isLoggedIn");
  const accessToken = Cookies.get("accessToken");

  const handelSubmitImages = () => {
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image));
    axios
      .post(`/api/v1/projects/${id}/images`, formData)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
    const selectedPreviewImages = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );
    setPreviewImages([...previewImages, ...selectedPreviewImages]);
  };
  return (
    <div>
      <MyNavbar />
      <br />
      <br />
      <br />
      <StepCompletionLine currentStep={2} />
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
      <br />
      <br />
      <Button onClick={handelSubmitImages} variant="contained">
        Submit
      </Button>
      {/* <button onClick={handelSubmitImages}>Submit</button> */}
      <Footer />
    </div>
  );
};
export default UploadProjectImages;
