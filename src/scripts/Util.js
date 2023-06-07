import { useNavigate } from "react-router-dom" 
import "../App.css"

export function CreateNavBar() { 
    const navigate = useNavigate()
    const widthR = window.innerWidth
    const heightR = window.innerHeight

    return <div className="navBar">

        <div style={{maxWidth:widthR/4, margin:"auto"}}>
        <button className="navBtn" onClick={() => { navigate("/") }}> 
            Home
        </button>

        <button className="navBtn" onClick={() => { navigate("/Gallery") }}> 
            Gallery
        </button>

        <button className="navBtn" onClick={() => { navigate("/Portfolio") }}> 
            Portfolio
        </button>
        
        <button className="navBtn" onClick={() => { navigate("/Game") }}> 
            Game
        </button>
        </div>
        </div>

   
}