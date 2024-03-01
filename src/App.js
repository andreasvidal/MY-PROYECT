import { Routes, Route } from "react-router-dom";
import Home from "./commons/menu/index";
import Error404 from "./commons/error_404/index";
import { AboutMe } from "./components/AboutMe/index";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/error404" element={<Error404 />} />
    </Routes>
  );
};

export default App;
