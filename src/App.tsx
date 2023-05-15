import "./App.css";
import { Homepage } from "./pages/Homepage";
import { ProgramSelect } from "./pages/ProgramSelect";
import { FiveThreeOnePage } from "./pages/FiveThreeOnePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiveByFivePage } from "./pages/FiveByFivePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/program-select" element={<ProgramSelect />} />
          <Route path="/5/3/1-training" element={<FiveThreeOnePage />} />
          <Route path="/5X5-training" element={<FiveByFivePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
