import { useState } from "react"

export default function Tabs({page}){
    const [current_page,setCurrentPage]=useState(page)
    const tabs=[
        {page:1,pageName:'Home'},
        {page:2,pageName:'My-Services'},
        {page:3,pageName:'My-Projects'},
        {page:4,pageName:'Skills-&-Experience'},
        {page:5,pageName:'Your-Project'},
    ]
    const toggleTabs=(height)=>{
        document.querySelector('.tabs').style.height=height
    }
    const CheckPage=()=>{
        var prev = page - 1
        var next = page + 1
        if(current_page === 1){
            return(
                tabs.map(tab=>
                    <a style={{
                        display:"block",
                    }} className="tab-item" key={tab.page} href={`/#${tab.pageName}`}>
                     <li className="p-3">
                      <span className="text-theme">0{tab.page}</span><br/>
                      <span className="text-light">{tab.pageName.replaceAll('-',' ')}</span>
                     </li>
                   </a>
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
                   <a key={tab.page} href={`#${page}`}>
                    <li className="tab-item p-3">
                      <span className="text-theme">0{tab.page}</span><br/>
                      <span className="text-light">{tab.pageName}</span>
                    </li>
                   </a>
                  )
            )
        }
    }
    return(
      <div>
          <div className="dropdown">
           <div className="dropdown-actions p-2 pr-5">
           <button onClick={()=>{toggleTabs('100%')}}>
           <i class="bi bi-grid-1x2"></i>
           </button>
           </div>
         </div>
         <div className="tabs w-100">
          <ul className="tab-list w-80 m-auto">
              <span onClick={()=>{toggleTabs('0%')}} className="close">X</span>
             {CheckPage()}
          </ul>
        </div>
      </div>
    )
}