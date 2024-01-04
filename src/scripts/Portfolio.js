import { SideNavBar } from './Util';
import '../styles/Portfolio.css';
export function Portfolio() {
   return <div>
        {SideNavBar('Portfolio')}

        <h3 className='portAlign'> Info <br/><br/>

        <a href="https://cindyjcheng.github.io\src\assets\Resume.pdf" target="_blank">
            <button type="button" class="btn btn-dark">Resume</button>
        </a>
        
        <br/><br/>

        <a href="https://www.linkedin.com/in/cindy-j-c-566615167">
            <button type="button" class="btn btn-dark">Linkedin</button>
        </a>

        <br/><br/>

        <a href="https://github.com/theDorime/cindyc">
            <button type="button" class="btn btn-dark">Site's Github Repo</button>
        </a>
        
        </h3>
    </div>
};