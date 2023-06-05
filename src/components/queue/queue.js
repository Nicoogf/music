import React from 'react'

export default function Queue( { tracks, setCurrentIndex }) {
  return (
    <div className='queue-container flex'>
      <div className='queue flex'>

        <p className='upNext'> up Next</p>
        <div className='queue-list'>
           {

            tracks.map(track =>(
              <div>
                <p> </p>
                <p> </p>
              </div>
            ))

           }
        </div>

      </div>
    </div>
  )
}
