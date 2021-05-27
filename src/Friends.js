import React from 'react'
import Navbar from './Navbar';
import './Style.css';
import Sidebar  from './Sidebar';
import Memories from './Memories'
import Moments from './Moments'
import Quotes from './Quotes'

function Friends() {
    return (
        <>
        <Navbar/>
        <div className="container">
         <div className="sidebar">
             <Sidebar/>
            </div>

            <div className="sec-col">
        
               
                 <Moments/>  
                 <Memories/>
                 <Quotes/>

                </div>
                
</div>
        </>
    )
}

export default Friends
