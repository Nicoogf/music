import React, { useEffect, useState } from 'react' ;
import "./widgets.css"
import apiClient from "../../spotify"
import WidgetCard from "./widgetCard"

export default function Widgets( {artist}) {

  const [similar, setSimilar] = useState( [] ) ;
  const [featured,setFeatured] = useState( [] ) ;
  const [newRelease, setNewRelease] = useState( [] );


  useEffect( ()=>{
    if(artistID){

      apiClient.get(`/artist/${artistID}/related-artists`)
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
       
    }
    


  }, [artistID] ) ;

  return (
    <div className='widgets-body flex'>

      <WidgetCard title="Similar Artist" similar= {similar} />

      <WidgetCard title="Made for you" featured= {featured} />

      <WidgetCard title="New releases" newRelease= {newRelease} />

    



    </div>
  )
}
