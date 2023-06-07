export function Gallery() {
    const widthR = window.innerWidth
    const heightR = window.innerHeight

    return <div style={{maxWidth:widthR-widthR/4, margin:"auto"}}>

        <h1  style={{textAlign:"center"}}> Gallery </h1>
        
       <div class="row">
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src={ require('../assets/sample/img1.JPG') }  alt="pic should be here" width="304" height="236" className="img-rounded"/>
                    <div class="caption">
                    <p>Photo of Niagara Falls.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src={ require('../assets/sample/img2.JPG') } alt="pic should be here" width="304" height="236" className="img-rounded"/>
                    <div class="caption">
                    <p>Another photo of Niagara Falls.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src={ require('../assets/sample/img3.JPG') } alt="pic should be here" width="304" height="236" className="img-rounded"/>
                    <div class="caption">
                    <p>A different angle of Niagara Falls.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}