import { Routes, Route } from "react-router-dom";
import {Home} from "./components/Home";
import "./App.css"

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
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
