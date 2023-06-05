import React from 'react'

export default function Queue( { tracks, setCurrentIndex }) {
  return (
    <div className='queue-container flex'>
      <div className='queue flex'>

        <p className='upNext'> up Next</p>
        <div className='queue-list'>
           {tracks?.map((track,index) =>(

              <div className='queue-item flex'
                   onClick={()=>setCurrentIndex(index)}>

                <p className='track-name'> {track?.track?.name} </p>
                <p> {} </p>
                
              </div>
            ))

           }
        </div>

      </div>
    </div>
  )
}
