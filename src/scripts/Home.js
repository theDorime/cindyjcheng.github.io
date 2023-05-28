import React from "react"
import { useNavigate } from "react-router-dom" 
import '../App.css';


export function Home() {
    const navigate = useNavigate()

    return <div className={"bigblue"}> 

        <h1>In the works</h1>

         {/* <button className={"btn"} onClick={() => { navigate("/Gallery") }}> 
            Gallery
        </button>

        <button className={"btn"} onClick={() => { navigate("/Portfolio") }}> 
            Portfolio
        </button>
        
        <button className={"btn"} onClick={() => { navigate("/Game") }}> 
            Game
        </button>  */}

    </div>

}

