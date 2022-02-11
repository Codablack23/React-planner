import Tabs from './tabs'

const Skills = () => {
    return ( 
        <div className="skills container">
            <Tabs page={4}/>
           <div className="w-80 m-auto">
            <div className="row">
                <div className="col-6">
                <ul className="experiences p-1">
                        <h1 className="text-light w-70 m-auto"><span className="text-theme">04.</span> Experiences</h1><br/>
                        <li className="w-70 m-auto text-light">
                          <header>
                            <h4>The RootHub</h4>
                            <span>Feb 2020</span>
                          </header>
                          <div>
                             <p className="">-A web and Mobile App Instructor</p>
                         </div>
                        </li>
                        <li className="w-70 m-auto text-light">
                          <header>
                            <h4>Floppies</h4>
                            <span>Dec 2021</span>
                          </header>
                          <div>
                             <p className="">-A React Front End Developer</p>
                         </div>
                        </li>
                    </ul>
                </div>
                  <div className="col-6">
                  </div>
                </div>
                <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                   <div className="all-skills w-80 m-auto ">
                     <h1 className="text-light">Skills</h1>
                     <ul className="skills-list">
                       <li className="theme-overlay p-2"><i className="fab fa-node-js text-theme"></i></li>
                       <li className="theme-overlay p-2"><i className="fab fa-react text-theme"></i></li>
                       <li className="theme-overlay p-2"><i className="fab fa-github text-theme"></i></li>
                       <li className="theme-overlay p-2"><i className="fab fa-sass text-theme"></i></li>
                       <li className="theme-overlay p-2"><i className="fab fa-vuejs text-theme"></i></li>
                     </ul>
                   </div>
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default Skills;