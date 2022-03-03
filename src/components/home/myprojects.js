import React,{useState} from 'react'
import { myProjects } from './projectList'
import {motion} from 'framer-motion'

export default function MyProject(){
    const allprojects =myProjects
    const [current_project,setCurrentProject]=useState(null)

    const selectProject=(id)=>{
      const project = allprojects.filter(pro=>pro.id==id)
      setCurrentProject(project[0])
    }
    
return(
  <div className="my-project" id='My-Projects'>
    <div className="w-80 mt-3 m-auto p-2">
        <h1 className="text-theme"><span>03.</span> My Projects</h1>
      <div className="row">
          <div className="col-6">
            <ul className="project-list">
                {allprojects.map(project=>
                  <li onClick={(e)=>{selectProject(project.id);console.log(e.target)}} className="p-1 pl-4 w-80 mb-3" key={project.id}>
                    <h3 className="text-theme">0{project.id}. {project.project_name}</h3>
                    <p className="text-lighter fs-2">{project.tools.map(tool=>`${tool} `)}</p>
                </li>
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
                        <h1 className="text-theme">0{current_project.id}. {current_project.project_name}</h1>
                        <p className="text-light">{current_project.project_description}</p><br/>
                        <p className="text-lighter fs-2">{current_project.tools.map(tool=>`${tool} `)}</p>
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