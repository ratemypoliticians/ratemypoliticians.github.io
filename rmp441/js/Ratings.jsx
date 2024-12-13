
import React from 'react';
import { useParams } from 'react-router-dom';
import RateMyPoliticians from './ratemypoliticians';

function Ratings() {
  const { name } = useParams();

  return (
    <div>
      <h1>Ratings Page for {name}</h1>
      <RateMyPoliticians name={name} />
    </div>
  );
}

export default Ratings;