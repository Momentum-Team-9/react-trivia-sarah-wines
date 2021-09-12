import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';

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
        let answers = [];
        answers.push(result.correct_answer);
        answers.push(result.incorrect_answers[0]);
        answers.push(result.incorrect_answers[1]);
        answers.push(result.incorrect_answers[2]);
        answers.sort(() => Math.random() - 0.5);
        return (
          <div className="questionsContainer">
            <div className="questions">
              <p key={idx}>{he.decode(result.question)}</p>
            </div>
            <button>{he.decode(answers[0])}</button>
            <button>{he.decode(answers[1])}</button>
            <button>{he.decode(answers[2])}</button>
            <button>{he.decode(answers[3])}</button>
          </div>
        );
      })}
    </>
  );
};
