import { useNavigate } from "react-router-dom" 
export function Portfolio() {
    const navigate = useNavigate()
   
   return <div className={"bigblue"}>
        <h1 className="bigblue">Portfolio</h1>
    
        <button className={"btn"} onClick={() => { navigate("/") }}> 
            Home
        </button>

        <button className={"btn"} onClick={() => { navigate("/Gallery") }}> 
            Gallery
        </button>

        <button className={"btn"} onClick={() => { navigate("/Game") }}> 
            Game
        </button>
        
    </div>
}