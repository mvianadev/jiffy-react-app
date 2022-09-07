import React from 'react'
import {Link} from 'wouter'
import './Gif.css'


function Gif({ title, id, url }) {
  return (
    <>
      <Link to={`/gif/${id}`} className='Gif'>
        <img src={url} alt={title}  className='ListOfGifs-item'/>
        <span className='bottom-left'>{title}</span>
      </Link>
    </>
  )
}

export default Gif