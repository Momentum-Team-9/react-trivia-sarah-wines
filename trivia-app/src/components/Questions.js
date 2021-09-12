import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';
import { Answers } from './Answers';

export const Questions = ({ id }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log('it runs');

    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium&type=multiple`
      )
      .then((response) => {
        console.log(response);
        setResults(response.data.results);
      });
  }, [id]);

  return (
    <>
      {results.map((result, idx) => {
        return (
          <div className="questionsContainer">
            <div className="questions">
              <p key={idx}>{he.decode(result.question)}</p>
              <Answers props={result} />
            </div>
          </div>
        );
      })}
    </>
  );
};
