import { useNavigate } from "react-router-dom" 
export function Gallery() {
    const navigate = useNavigate()
    return <div className={"bigblue"}>

    <h1 className="bigblue">Photos</h1>
    
    <button className={"btn"} onClick={() => { navigate("/") }}> 
            Home
    </button>

    <button className={"btn"} onClick={() => { navigate("/Portfolio") }}> 
        Portfolio
    </button>
    
    <button className={"btn"} onClick={() => { navigate("/Game") }}> 
        Game
    </button>



    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <div class="row">
        <div class="col-md-4">
            <div class="thumbnail">
            <a href="pfp.JPG">
                <img src={ require('../pfp.JPG') }  alt="pic should be here" width="304" height="236" className="img-rounded"/>
                <div class="caption">
                <p>Lorem ipsum...</p>
                </div>
            </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
            <a href="pfp.JPG">
                <img src={ require('../pfp.JPG') } alt="pic should be here" width="304" height="236" className="img-rounded"/>
                <div class="caption">
                <p>Lorem ipsum...</p>
                </div>
            </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
            <a href="pfp.JPG">
                <img src={ require('../pfp.JPG') } alt="pic should be here" width="304" height="236" className="img-rounded"/>
                <div class="caption">
                <p>Lorem ipsum...</p>
                </div>
            </a>
            </div>
        </div>
    </div>
    
    </div>
    
}