import Tabs from './tabs'

export default function Project(){
    return(
        <div className="your-project">
              <Tabs page={5}/>
          <div className="w-40 mt-5 m-auto">
          <ul className="contact p-3 pt-1 pl-5">
           <h1 className="text-light">05. <br/><span className="text-theme">Lets</span> Discuss <br/>Your <span className="text-theme" >Project</span></h1><br/>
           <li className="p-2 text-light">
               <span><i class="bi bi-google"></i></span>
               <h4>goodluckedih@gmail.com</h4>
               <span className="action ml-auto text-light"><i class="bi bi-pencil-fill"></i></span>
           </li><br/>
           <li className="p-2 text-light">
               <span><i class="bi bi-whatsapp "></i></span>
               <h4> +234-812-454-1568</h4>
               <span className="action ml-auto text-light"><i class="bi bi-whatsapp"></i></span>
             
           </li><br/>
        </ul>
        </div>
        </div>
    )
}