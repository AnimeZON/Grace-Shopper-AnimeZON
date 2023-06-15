import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate();
  const { term } = useParams();

  const search = (ev) => {
    if(ev.target.value.trim()) {
      navigate(`/search/${ev.target.value}`)
    } else {
      navigate('/');
    }
  };


  return (
    
      <input className='nav__searchInput' value={ term } placeholder='Search Animezon' onChange={ search }/>
    
  )
}

export default Search