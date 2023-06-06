import React, { useEffect, useState } from 'react' ;
import "./widgets.css"
import apiClient from "../../spotify"

export default function Widgets( {artist}) {

  const [similar, setSimilar] = useState( [] ) ;
  const [featured,setFeatured] = useState( [] ) ;
  const [newRelease, setNewRelease] = useState( [] );
  const id = artistID?.artist[0]?.id ; 

  useEffect( ()=>{
    apiClient.get(`/artist/${id}/related-artists`)
    .then(res => {
      const a = res.data?.artists.slice(0,3) ;
      setSimilar(a)
    })
    .catch(err =>  console.error(err))

    apiClient.get(`/browse/featured-playlists`)
    .then(res => {
      const a = res.data?.playlists.items.slice(0,3) ;
      setFeatured(a)
    })
    .catch(err =>  console.error(err))

    apiClient.get(`browse/new-rekease`)
    .then(res => {
      const a = res.data?.albums.items.slice(0,3) ;
      setNewRelease(a)
    })
    .catch(err =>  console.error(err))


  }, [id] ) ;

  return (
    <div>


      
    </div>
  )
}
