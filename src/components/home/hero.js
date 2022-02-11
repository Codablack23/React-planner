import Tabs from './tabs'

export default function Hero(){
    return(
     <div className="hero w-100">
        <Tabs page={1}/>
        <div className="hero-section w-70 m-auto">
            <h1 className="hero-title text-light"> I <span  className="text-theme">am</span> <br/>Edih <span className="text-theme">Goodluck</span></h1><br/>
            <p className="hero-text text-light w-50"> An Enthusiastic and Curious Programmer that specializes in web and mobile app development  who will be able To adapt, learn and build Your imaginations</p><br/>
            <button className="hero-btn text-theme">Check Me Out </button>
        </div>
        <div className="hero-btn-group">
             <div className="social-handles p-2">
              <p><i className="bi bi-facebook hover-text-theme hover-scale text-light"></i></p>
              <p><i className="bi bi-twitter hover-text-theme hover-scale text-light"></i></p>
              <p><i className="bi bi-github  hover-text-theme hover-scale text-light"></i></p>
             </div>
           </div>
    </div>
    )
}