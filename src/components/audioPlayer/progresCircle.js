import React from 'react'
import "./progresCircle.css"

const Circle = ({color,percentage,size,strokeWidth})=>{
  const radius = size / 2  - 10 ;
  const circ = ((2 * Math.PI * radius) - 20 )
  const strokePct = ((100 - Math.round(percentage))* circ )*100;

  return (

    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : "" }
      strokeWidth={strokeWidth}
      strokeDasharray = {circ}
      strokeDashOffset ={ percentage? strokePct : 0}
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
    <div className='progress-circle flex'>
    
      <svg width={size} height={size}>

        <g>
          <Circle 
            strokeWidth={"0.4rem"}
            color = "#384F73"
            size = {size} />
          <Circle 
            strokeWidth={"0.6rem"}
            color = {color}
            percentage={percentage}
            size = {size} />
        </g>

        <defs>

          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={ (size/2) - 30 } fill= "#ffffff"></circle>
          </clipPath>

          <clipPath id="myInnerCircle">
          <circle cx="50%" cy="50%" r={ (size/2) - 100 } fill= "#ffffff"></circle>
          </clipPath>

        </defs>

        <image 
          className={isPlaying ? "active" : ""} 
          x={30} 
          y={30} 
          width={2*((size/2)-30)} 
          heigth={2*((size/2)-30)} 
          href="" 
        />

        <image 
          className={isPlaying ? "active" : ""} 
          x={100} 
          y={100} 
          width={2*((size/2)-100)} 
          heigth={2*((size/2)-100)} 
          href="" 
        />

      
      </svg>
    </div>
  )
}
