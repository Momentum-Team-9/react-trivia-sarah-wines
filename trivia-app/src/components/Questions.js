import React, { useEffect } from 'react';
import axios from 'axios';

export const Questions = ({ id }) => {
  useEffect(() => {
    console.log('it runs');
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${id}`)
      .then((response) => {
        console.log(response.data.results[3].question);
      });
  }, [id]);
  return <p>{id}</p>;
};
