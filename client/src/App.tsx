import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";

function App() {

  return (
    <div className="bg-rose-50 h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App