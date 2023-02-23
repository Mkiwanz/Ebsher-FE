import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
