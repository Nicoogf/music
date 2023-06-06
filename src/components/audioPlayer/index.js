import React ,{useState , useRef}from 'react'
import "./audioPlayer.css"
import ProgressCicle from "./progresCircle"
import Controls from './controls';
import WaveAnimation from './waveAnimation';

export default function audioPlayer(currentTrack,currentIndex, setCurrentIndex ,totalSongs) {


  const [isPlaying, setIsPlaying] = useState(false); 
  const [trackProgress , setTrackProgress] = useState(0) ;
  var audioSrc =total[currentIndex]?.track.preview_url ;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url))

  const intervalRef = useRef();

  const isReady = useRef(false);

  const {duration} =audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0 ;

  const startTimer = () =>{
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(()=>{
      if(audioRef.current.ended){
        handleNext();
      }else{
        setTrackProgress(audioRef.current.currentTime)
        }
      }, [1000]
   )}
  }


  const artists = [] ;
    currentTrack?.album?.artists.forEach(artist => {
      artists.push(artist.name)
    });


  return (
    <div className='player-body flex'>

        <div className='player-left-body'>

            <ProgressCicle 
            percentage={currentPercentage}
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
           isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total = {total}
          />

           

        </div>

        </div>        
        
    </div>
  )
}
