
import axios from "axios";
import PageRoutes from "./Pages/PageRoutes";
import "./App.css";
import "./AppStyle.css";
import "./style.scss";


function App() {
  axios.defaults.baseURL = "http://localhost:8081";
  return <PageRoutes />;
}

export default App;
