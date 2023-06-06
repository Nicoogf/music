import React from 'react'
import "./audioPlayer.css"
import ProgressCicle from "./progresCircle"
import Controls from './controls';
import WaveAnimation from './waveAnimation';

export default function audioPlayer(currentTrack, isPlaying) {

const artists = [] ;
currentTrack?.album?.artists.forEach(artist => {
  artists.push(artist.name)
});


  return (
    <div className='player-body flex'>

        <div className='player-left-body'>

            <ProgressCicle 
            percentage={75}
            isPlaying={true}
            image={currentTrack?.album?.images[0]?.url}
            size={300}
            color="#C96850"
            />

        </div>


        <div className='player-right-body flex'>

        <p className='song-title'> {currentTrack?.name} </p>  
        <p className='song-artist'> {artists.join(" | ")} </p>
        <div className="player-right-bottom flex">

          <div className='song-duration flex'>
            <p className='duration'> 0:01 </p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className='duration'> 0:30 </p>
          </div>

          <Controls
          /*  isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handl*/
          />

           

        </div>

        </div>        
        
    </div>
  )
}
