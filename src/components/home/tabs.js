import { useState } from "react"

export default function Tabs({page}){
    const [current_page,setCurrentPage]=useState(page)
    const tabs=[
        {page:1,pageName:'Home'},
        {page:2,pageName:'My Services'},
        {page:3,pageName:'My Projects'},
        {page:4,pageName:'Skills & Experience'},
        {page:5,pageName:'Your Project'},
    ]
    const CheckPage=()=>{
        var prev = page - 1
        var next = page + 1
        if(current_page === 1){
            return(
                tabs.map(tab=>
                    <li className="tab-item p-3" key={tab.page}>
                      <span className="text-theme">0{tab.page}</span><br/>
                      <span className="text-light">{tab.pageName}</span>
                  </li>
                  )
            )
        }
        else{
            const prev_tab=tabs.filter(tab=>tab.page == prev)
            const next_tab=tabs.filter(tab=>tab.page == next)
           const page_tabs=[...prev_tab,...next_tab]
           console.log(page_tabs)
            return(
                page_tabs.map(tab=>
                    <li className="tab-item p-3" key={tab.page}>
                      <span className="text-theme">0{tab.page}</span><br/>
                      <span className="text-light">{tab.pageName}</span>
                  </li>
                  )
            )
        }
    }
    return(
        <div className="tabs w-100 p-2">
          <ul className="tab-list w-80 m-auto">
             {CheckPage()}
          </ul>
        </div>
    )
}