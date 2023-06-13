import { SideNavBar } from "./Util"

export function Gallery() {

    return <div>
        {SideNavBar('Gallery')}

        <div className="row">

            <div className="col-md-4">
                <div className="thumbnail">
                
                    <img src={ require('../assets/sample/img1.JPG') } className="img-fluid" alt="pic should be here"/>
                    <p>Photo of Niagara Falls.</p>
                
                </div>
            </div>

            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={ require('../assets/sample/img2.JPG') } className="img-fluid" alt="pic should be here"/>
                    <div className="caption">
                    <p>Another photo of Niagara Falls.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={ require('../assets/sample/img3.JPG') } className="img-fluid" alt="pic should be here"/>
                    <div className="caption">
                    <p>A different angle of Niagara Falls.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
}