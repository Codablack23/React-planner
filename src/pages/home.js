import '../assets/styles/home.scss'
import Hero from '../components/home/hero'
import Services from "../components/home/services"
import Skills from "../components/home/skills"
import Project from "../components/home/project"
import MyProject from "../components/home/myprojects"

const Home = () => {
    return ( 
        <div className="Home">
         <Hero/>
         <Services/>
         <MyProject/>
         <Skills/>
         <Project/>
        </div>
     );
}
 
export default Home;