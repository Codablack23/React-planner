import Tabs from './tabs'
import { motion } from 'framer-motion'

export default function Hero(){
    return(
     <div className="hero w-100" id='Home'>
         <motion.div  
         initial="hidden"
         animate="visible"
        variants={{
            visible: { x: 0 },
            hidden: { x:-100},
         }}
         >
        <Tabs page={1}/>
        <div className="hero-section m-auto p-2 w-70">
            <h1 className="hero-title text-light"> I <span  className="text-theme">am</span> <br/>Edih <span className="text-theme">Goodluck</span></h1><br/>
            <p className="hero-text text-light"> An Enthusiastic and Curious Programmer that specializes in web and mobile app development  who will be able To adapt, learn and build Your imaginations</p><br/>
            <button className="hero-btn text-theme">Check Me Out </button>
        </div>
        <div className="hero-btn-group">
             <div className="social-handles p-2">
              <p><i className="bi bi-facebook hover-text-theme hover-scale text-light"></i></p>
              <p><i className="bi bi-twitter hover-text-theme hover-scale text-light"></i></p>
              <p><i className="bi bi-github  hover-text-theme hover-scale text-light"></i></p>
             </div>
        </div>
    </motion.div>
    </div>
    )
}