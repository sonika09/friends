import React from 'react'
import './Style.css'


function Sidedata(props) {
    return (
        <div className="sideraw">
            <div className="header"> {props.heading}</div>
        </div>
    )
}



function Sidebar() {
    return (
        <div className="sidenav">
             <div className="photo">
              <img src="admin.jpg" alt="admin"></img>
            </div>
            <div className="info">
                <Sidedata heading={"Sonika Soni"} />
                <Sidedata heading={"F-Developer"} />
                <Sidedata heading={"9811820114"} />
                   </div>
                  <div className="sidespace">
                  A best friend is <br/>someone who loves<br/> you when you<br/> forget to love yourself. 


                  </div>
        </div>
    )
}

export default Sidebar
