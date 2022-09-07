import React from 'react'
import Gif from '../Gif'

const ListOfGifs = ({ gifs }) => {

  return <div className='List-Gif ListOfGifs'>
    {
      gifs.map(singleGif =>
        <Gif
          key={singleGif.id}
          title={singleGif.title}
          url={singleGif.url}
          id={singleGif.id}
        />
        )
    }
  </div>

}

export default ListOfGifs