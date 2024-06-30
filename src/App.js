import { Route, Routes} from "react-router-dom"

import { Home } from "./scripts/Home"
import { Portfolio } from "./scripts/Portfolio"
import { Game } from "./scripts/Game"

import { Gallery, PuertoRico, Graduation, Buffalo, NYC, Iceland} from "./scripts/Gallery/Gallery"

import { SideNavBar, CreateNavBar } from "./scripts/Util"

function App() {
 
  return (
    <div>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Game" element={<Game />} />

        <Route path="/Buffalo" element={<Gallery />} />  
        <Route path="/Graduation" element={<Gallery />} />
        <Route path="/Puerto_Rico_1" element={<Gallery />} /> 
        <Route path="/New_York_City" element={<Gallery />} />
        <Route path="/Iceland" element={<Gallery />} />

        <Route path="/Puerto_Rico_2" element={<Gallery />} /> 
        <Route path="/Roadtrip" element={<Gallery />} />
        <Route path="/Red_Rock" element={<Gallery />} /> 
        <Route path="/Zion" element={<Gallery />} /> 
        <Route path="/Rumney" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App