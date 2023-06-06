import React from 'react' ;
import "./widgetCard.css" ;
import WidgetEntry from "./widgetsEntry" ;
import { IconContext } from 'react-icons' ;
import {FiChevronRight}  from ".readct-icons/fi"


export default function widgetCard( {title ,similar,featured ,newRelease } ) {
  return (
    <div className='widgetcard-body'>

    <p className='widget-title'> {title} </p>

    { similar
     ? similar.map (artist) => (

          <WidgetEntry 
            title = {artist?.name}
            subtitle = {artist?.followers.total + "Followers"}
            iamge={artist?.images[2]?.url }
          />

        )) : featured 
           ? featured.map((playlist) => (
           <WidgetEntry 
                title = {playlist?.name}
                subtitle = {playlist?.tracks.total + "Songs"}
                iamge={playlist?.images[0]?.url} 
          />

        )) : newRelease 
           ? newRelease.map(album) => (

            <WidgetEntry 
                title = {album?.name}
                subtitle = {album?.artist[0]?.name}
                iamge={album?.images[2]?.url} />

            ))
            
            : null }


         <div className='widget-fade'>

          <div className='fade-button'>

              <IconContext.Provider value={{size : "24px" , color :"#c4d0e3"}}>

                <FiChevronRight />

              </IconContext.Provider>

          </div>


         </div>           
    </div>
  )
}
