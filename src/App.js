import { Route, Routes } from "react-router-dom"
import { Home } from "./scripts/Home"
import { Gallery } from "./scripts/Gallery"
import { Portfolio } from "./scripts/Portfolio"
import { Game } from "./scripts/Game"
import { CreateNavBar } from "./scripts/Util"

function App() {
 
  return (
    <div>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
       
      <CreateNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </div>
  )
}

export default App