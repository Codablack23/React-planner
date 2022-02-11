import Tabs from './tabs'

export default function Services(){
    return(
        <div className="services">
           <Tabs page={2}/>
            <div className="container w-70 m-auto" style={{paddingTop:"2%",}}>
                {/* <h1 className="text-center">What Can I Build?</h1> */}
               <div className="row">
                 <div className="col-7">
                 <div className="services-heading w-80 text-light">
                      <h1>02.<br/> How <span className="text-theme">I</span> Can <span className="text-theme">Contribute</span> to Your <span className="text-theme">Project</span></h1>         
                    </div>
                 </div>
               <div className="col-5">    
                  <ul className="service-list min-100 p-3">
                    <li className="w-70 m-auto p-5 text-light"><span><i className="bi bi-code-slash text-theme"></i></span>Front End Development</li><br/>
                    <li className="w-70 m-auto p-5 text-light"><span><i className="bi bi-braces text-theme"></i></span>Backend Development</li><br/>
                    <li className="w-70 m-auto p-5 text-light"><span className="text-theme" ><svg style={{fontSize:20}} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="35px" viewBox="0 0 24 24" width="35px" fill="#1DE9B6"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/></g></g></svg></span>          Mobile App Developmemt</li><br/>
                  </ul>
                </div>
               </div>
            </div>
        </div>
    )
}