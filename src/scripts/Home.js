import React from "react"
import { useNavigate } from "react-router-dom" 

export function Home() {
    const navigate = useNavigate()

    return <div> 
        <h1>Hello</h1>
        <button onClick={() => {
            navigate("/Art")
        }}
        />
    </div>

}

