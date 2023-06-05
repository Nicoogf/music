import React from 'react'
import "./audioPlayer.css"
import ProgressCicle from "./progresCircle"

export default function audioPlayer(currentTrack) {
  return (
    <div className='player-body flex'>

        <div className='player-left-body'>

            <ProgressCicle 
            percentage={75}
            isPlaying={true}
            /*image={currentTrack.images[0]?.url}*/
            size={300}
            color="#C96850"
            />

        </div>


        <div className='player-right-body'></div>        
        
    </div>
  )
}
