import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>

      <img src ="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/02/08210136/barijho-14.jpg" 
           className='profile-img' 
           alt="profile" /> 

      <div>
          <SidebarButton title="" to="" icon={}/> 
          <SidebarButton /> 
          <SidebarButton /> 
          <SidebarButton /> 
          <SidebarButton /> 
      </div>

      <SidebarButton /> 

    </div>
  )
}
