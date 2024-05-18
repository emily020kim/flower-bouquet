import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bouquet from "./pages/Bouquet";
import RosePage from "./pages/RosePage";
import LavenderPage from "./pages/LavenderPage";
import TulipPage from "./pages/TulipPage";
import OrchidPage from "./pages/OrchidPage";

function App() {

  return (
    <div className="bg-rose-50 h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouquet" element={<Bouquet />} />
          <Route path="/rose" element={<RosePage />} />
          <Route path="/lavender" element={<LavenderPage />} />
          <Route path="/tulip" element={<TulipPage />} />
          <Route path="/orchid" element={<OrchidPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App