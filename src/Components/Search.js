import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Search = ()=> {
  const navigate = useNavigate();
  const { term } = useParams();
  const search = (ev)=> {
    if(ev.target.value.trim()){
      navigate(`/search/${ev.target.value}`);
    }
    else {
      navigate('/');
    }
  };

  return (
    <div className='searchBar'>
      <input value={term ? term : ''} placeholder='Search Animezon' onChange={ search } />
    </div>
  )
};

export default Search