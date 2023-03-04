import { Route, Routes, BrowserRouter } from "react-router-dom";
import NewProject from "../Compnents/NewProject/NewProject";
import HomePage from "./HomePage";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<HomePage />} />
        <Route path="/newProject" element={<NewProject />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
