import { Routes, Route } from "react-router-dom";
import {Home} from "./components/Home";
import {AboutMe} from "./components/AbouteMe/AbouteMe"
import {Proyects} from "./components/proyects/Proyects"
import {Hobbies} from "./components/hobbie/Hobbie"
import "./App.css"

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AbouteMe" element={<AboutMe/>}/>
          <Route path="/Proyects" element={<Proyects/>}/>
          <Route path="/hobbies" element={<Hobbies/>}/>
          <Route path="*" element={
            <div>
              <h1>PAGINA NO ENCONTRADA ERROR 404</h1>
              <h2>La URL a la que ingresaste es incorrecta.</h2>
            </div>
          }/>
        </Routes>
  );
}

export default App;
