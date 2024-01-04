import { SideNavBar } from './Util';
import '../styles/Portfolio.css';
export function Portfolio() {

    const resumeDownload = () => {
        //update pdf path 
        const pdfUrl = 'https://github.com/theDorime/cindyc/raw/gallery-database/src/assets/Resume.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      };

   return <div>
        {SideNavBar('Portfolio')}

        <h3 className='portAlign'> Info <br/><br/>

        <a herf="https://github.com/theDorime/cindyc/raw/gallery-database/src/assets/Resume.pdf">
            <button type="button" class="btn btn-dark" onClick={resumeDownload}>Resume</button>
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