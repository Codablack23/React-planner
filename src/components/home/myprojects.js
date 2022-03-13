import React,{useState,useEffect} from 'react'

import {motion} from 'framer-motion'
import {createClient} from 'contentful'

const client = createClient({
  space:"hjggs4hwop96",
  accessToken:'KEzGuzVBC1RSmADBqNCDklPOAWc-p3214iH6ewk6GJk'
  
})
export default function MyProject(){
    const [projects,setProjects] = useState([]) 
    const [current_project,setCurrentProject]=useState(null)

    const selectProject=(id)=>{
      const project = projects.filter(pro=>pro.id === id)
      console.log(project)
      setCurrentProject(project[0])
    }

     async function getEntries(){
      const entries = await client.getEntries()
      const project = entries.items
      
        setProjects(project.map((p,i)=>{
        return {
          index:i + 1,
          id:p.sys.id,
          title:p.fields.title,
          description:p.fields.description.content[0].content[0].value,
          tools:p.fields.tools,
          links:p.fields.links
        }
      }))
     }
     function Redirect(e,url){
       e.preventDefault()
       console.log(url)
       window.open(url,"_blank")
     }
     useEffect(()=>{
     getEntries()
     },[])
return(
  <div className="my-project" id='My-Projects'>
    <div className="w-80 mt-3 m-auto p-2">
        <h1 className="text-theme"><span>03.</span> My Projects</h1>
      <div className="project-sm p-3">
        {
         projects.length > 0 ?projects.map(project=>(
          <div key ={project.id} className="w-100 card p-3 bg-complement min-vh-50">
                <div className="w-90 m-auto">
                    <header className="icons">

                    </header>
                    <motion.div
                    variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                    }}
                  >
                  <div>
                        <h1 className="text-theme">0{project.index}. {project.title}</h1>
                        <p className="text-light">{project.description}</p><br/>
                        <p className="text-lighter fs-2">{project.tools.map(tool=>`${tool} `)}</p>
                        <div className="mt-3" style={{
                          display:"flex",
                          justifyContent:'space-between',
                          padding:'2%'
                        }}>
                         <p><a
                         href={project.links.github}
                         onClick={(e)=>Redirect(e,project.links.github)}>
                           <span><i class="bi bi-github text-theme"
                           style={{
                           fontSize:'22px'
                         }}
                           ></i></span>
                         </a></p>
                         <p><a 
                         href={project.links.url}
                         onClick={(e)=>Redirect(e,project.links.url)}>
                         <span><i class="bi bi-box-arrow-up-right text-theme" style={{
                           fontSize:'22px'
                         }}></i></span>
                         </a></p>
                        </div>
                    </div>
                  </motion.div>

                  </div>
          </div>
         ))
         :(
          <div className="w-90 m-auto text-theme p-3" style={{textAlign:"center"}}>
              <p className="mt-3">...Loading Projects</p>
          </div>
        )
        }
      </div>
      <div className="row project-lg">
          <div className="col-6">
            <ul className="project-list">
                {projects.length > 0?projects.map(project=>
                  <li onClick={(e)=>{selectProject(project.id);console.log(e.target)}} className="p-1 pl-4 w-100 mb-3" key={project.id}>
                    <h3 className="text-theme">0{project.index}. {project.title}</h3>
                    <p className="text-lighter fs-2">{project.tools.map(tool=>`${tool} `)}</p>
                </li>
                ):(
                  <div className="w-90 m-auto text-theme p-3" style={{textAlign:"center"}}>
                      <p className="mt-3">...Loading Projects</p>
                  </div>
              )}

            </ul>
          </div> 
          <div className="col-6">
            <div className="w-100 card p-3 bg-complement min-vh-50">
              {current_project != null ?(
                <div className="w-90 m-auto">
                    <header className="icons">

                    </header>
                    <motion.div
                    variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                    }}
                  >
                  <div>
                        <h1 className="text-theme">0{current_project.index}. {current_project.title}</h1>
                        <p className="text-light">{current_project.description}</p><br/>
                        <p className="text-lighter fs-2">{current_project.tools.map(tool=>`${tool} `)}</p>
                        <div className="mt-3" style={{
                          display:"flex",
                          justifyContent:'space-between',
                          padding:'2%'
                        }}>
                         <p><a
                         href={current_project.links.github}
                         onClick={(e)=>Redirect(e,current_project.links.github)}>
                           <span><i class="bi bi-github text-theme"
                           style={{
                           fontSize:'22px'
                         }}
                           ></i></span>
                         </a></p>
                         <p><a 
                         href={current_project.links.url}
                         onClick={(e)=>Redirect(e,current_project.links.url)}>
                         <span><i class="bi bi-box-arrow-up-right text-theme" style={{
                           fontSize:'22px'
                         }}></i></span>
                         </a></p>
                        </div>
                    </div>
                  </motion.div>

                  </div>
                
              ):(
                  <div className="w-90 m-auto text-theme p-3" style={{textAlign:"center"}}>
                      <h1 className="mt-3">You Have Not Selected Any Of My Project</h1>
                  </div>
              )}
            </div>
          </div>
      </div>
    </div>
  </div>
)
}