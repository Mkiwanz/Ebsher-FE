import { Route, Routes, BrowserRouter } from "react-router-dom";
import NewProject from "../Compnents/NewProject/NewProject";
import UploadProjectImages from "../Compnents/UploadProjectImages/UploadProjectImages";
import HomePage from "./HomePage";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<HomePage />} />
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/uploadProjectImages/:id" element={<UploadProjectImages />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
