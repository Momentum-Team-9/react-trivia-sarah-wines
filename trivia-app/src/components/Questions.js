import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';

export const Questions = ({ id }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log('it runs');
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${id}`)
      .then((response) => {
        setResults(response.data.results);
        console.log(response.data.results[3].question);
      });
  }, [id]);
  return (
    <p>
      {results.map((result) => {
        return <p>{he.decode(result.question)}</p>;
      })}
    </p>
  );
};
