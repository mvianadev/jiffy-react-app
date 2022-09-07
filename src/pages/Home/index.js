import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

function Home() {
  const [keyword] = useState('')
  const [path, pushLocation] = useLocation() //eslint-disable-line
  const { gifs } = useGifs({ keyword })

  return (
    <div className='home'>
      <TrendingSearches />
      <h3 className='app-title center'>Last Search:</h3>
      <ListOfGifs gifs={gifs} /> 
    </div>
  )
}

export default Home