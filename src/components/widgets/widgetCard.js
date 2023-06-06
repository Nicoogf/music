import React from 'react'
import "./widgetCard.css"
import Widgets from '.'

export default function widgetCard( {title ,similar,featured ,newRelease } ) {
  return (
    <div className='widgetcard-body'>

    <p className='widget-title'> {title} </p>

    { similar
     ? similar.map (artist) => (

          <WidgetEntry 
            title = {artist?.name}
            subtitle = {artist?.followers.total}
            iamge={artist?.images[2].url }
          />

        )) : featured 
           ? featured.map((playlist) => (
           <WidgetEntry 
                title = {playlist?.name}
                subtitle = {playlist?.tracks.total}
                iamge={playlist?.images[2].url} 
          />

        )) : newRelease 
           ? newRelease.map(album) => (

            <WidgetEntry 
                title = {album.name}
                subtitle = {album.artist[0]?.name}
                iamge={album.images[2].url} />

            ) 
            
            : null }

           
    </div>
  )
}
