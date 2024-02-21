import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Testing} from "./pages/page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/page" element={<Testing/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
