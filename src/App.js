import {Route, Routes, Link} from "react-router-dom"
import { Home } from "./scripts/Home"
import { Art } from "./scripts/Art"
import { Portfolio } from "./scripts/Portfolio"
import { Game } from "./scripts/Game"
function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Art" element={<Art />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
  )
}

export default App