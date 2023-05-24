import { useNavigate } from "react-router-dom" 
export function Game() {
    const navigate = useNavigate()
    return <div className={"bigblue"}>
        <h1 className="bigblue">Game</h1>
    
        <button className={"btn"} onClick={() => { navigate("/Gallery") }}> 
            Gallery
        </button>

        <button className={"btn"} onClick={() => { navigate("/Portfolio") }}> 
            Portfolio
        </button>
        
        <button className={"btn"} onClick={() => { navigate("/Game") }}> 
            Game
        </button>
    </div>
}
