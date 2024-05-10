import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bouquet from "./pages/Bouquet";
import FlowerCard from "./components/FlowerCard";

function App() {

  return (
    <div className="bg-rose-50 h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouquet" element={<Bouquet />} />
          <Route path="/card" element={<FlowerCard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App