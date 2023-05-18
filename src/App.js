import {Route, Routes, Link} from "react-router-dom"
import { Home } from "./scripts/Home"
import { Art } from "./scripts/Art"

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Art" element={<Art />} />
    </Routes>
  )
}

export default App