import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate();

  const search = (ev) => {
    navigate(`/search/${ev.target.value}`)
  };


  return (
    <div>
      <input placeholder='Search Animezon' onChange={ search }/>
    </div>
  )
}

export default Search