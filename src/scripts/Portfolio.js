import { SideNavBar } from './Util';
import '../styles/Portfolio.css';
export function Portfolio() {
   return <div>
        {SideNavBar('Portfolio')}

        <h3 className='portAlign'> Info <br/><br/>

        
        <a href="https://github.com/theDorime/cindyc">
            <button type="button" class="btn btn-dark">Github Repo</button>
        </a>
        <br/><br/>
        <a href="https://www.linkedin.com/in/cindy-j-c-566615167">
            <button type="button" class="btn btn-dark">Linkedin</button>
        </a>
        </h3>
    </div>
};