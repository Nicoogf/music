import React from 'react'
import "./progresCircle.css"

const Circle = ({color,percentage,size,stroke})=>{
  const radius = size / 2  - 10 ;
  const circ = ((2 * Math.PI * r) - 20 )
  const strokePct = ((100 - Math.round(percentage) * circ ))*100;

  return (

    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : "" }
      strokeWidth={strokeWidth}
      strokeDasharray = {circ}
      strokeDashOff  { percentage ? strokePct : 0}
      strokeLinecap = "round" 
      ></circle>
      
  )
 };

export default function progresCircle({
  percentage,
  isPlaying,
  /*image={currentTrack.images[0]?.url}*/
  size,
  color}) {
  return (
    <div>progresCircle</div>
  )
}
