import { Route, Routes } from "react-router-dom"
import { Home } from "./scripts/Home"
import { Portfolio } from "./scripts/Portfolio"
import { Game } from "./scripts/Game"

import { Gallery, PuertoRico, Graduation, NiagaraFalls, SpringBreak } from "./scripts/Gallery/Gallery"

import { SideNavBar, CreateNavBar } from "./scripts/Util"

function App() {
 
  return (
    <div>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Game" element={<Game />} />

        <Route path="/Graduation" element={<Graduation />} />
        <Route path="/NiagaraFalls" element={<NiagaraFalls />} />  
        <Route path="/PuertoRico" element={<PuertoRico />} /> 
        <Route path="/SpringBreak" element={<SpringBreak />} /> 
      </Routes>
    </div>
  )
}

export default App