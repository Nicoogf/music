import React from 'react'
import { Link } from 'react-router-dom' ;
import './sidebarButton.css'

export default function SidebarButton(props) {
  return (
    <Link to={props.to}>

        <div>{props.icon}</div>

    </Link>
   
  )
}
