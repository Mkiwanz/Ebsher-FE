import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../Compnents/Login/Login";
import NewProject from "../Compnents/NewProject/NewProject";
import ProjectDetails from "../Compnents/ProjectDetails/ProjectDetails";
import UploadProjectImages from "../Compnents/UploadProjectImages/UploadProjectImages";
import HomePage from "./HomePage";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/uploadProjectImages/:id"
          element={<UploadProjectImages />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
