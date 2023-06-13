import { SideNavBar } from "./Util";

export function Portfolio() {
   return <div>
        {SideNavBar('Portfolio')};
        <h3> For my resume and stuff <br/>
        <a href="https://github.com/theDorime/cindyc">
            <button type="button" class="btn btn-dark">Github Repo</button>
        </a>
        </h3>
    </div>
};