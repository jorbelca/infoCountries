import Home from "./Views/Home"
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import DetailCountry from "./Views/DetailCountry"

function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<DetailCountry />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
