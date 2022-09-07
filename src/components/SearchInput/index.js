import React, {  useState } from 'react'
import { useLocation } from 'wouter'
import './SearchInput.css'

function SearchInput() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation() //eslint-disable-line

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
    console.log(keyword)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }


  return (
    <>
      <div className='form-group'>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' value={keyword} required/>
          <label>Search a gif here...</label>
        </form>
      </div>
    </>
  )
}

export default SearchInput