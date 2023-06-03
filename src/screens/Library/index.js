import React , {useEffect, useState} from 'react' ;
import APIKit from "../../spotify" ;
import {IconContext} from "react-icons" ;
import {AiFillPlayCircle} from "react-icons/ai" ;
import "./library.css" ;

export default function Library() {

  const[playlists , setPlaylist] = useState(null)


  useEffect(()=>{
    APIKit.get("me/playlists").then(function(response){
      setPlaylist(response.data.items);
    })
  },[]) 

  return (

    <div className='screen-container'>
      <div className='library-body'> 
      
      {playlists?.map( (playlist)=>(

        <div className='playlist-card'>

        <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{size:"50px",color:"#E99D72"}}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>

        </div>
      ))}

     
 

     
      
      </div>   
    </div>
  );
}
