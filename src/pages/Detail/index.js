import React, { useContext } from 'react'
import Gif from 'components/Gif'
import GifsContext from 'context/GifsContext'


function Detail({ params }) {
  const {gifs} = useContext(GifsContext)

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  return (
    <div className='app-detail'>
      <h2>{gif.title}</h2>
      <Gif {...gif} />
    </div>
  )
}

export default React.memo(Detail)