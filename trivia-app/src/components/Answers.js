import React, { useEffect, useState } from 'react';
import he from 'he';

export const Answers = (result) => {
  // useEffect(() => {
  //   console.log(result.props.correct_answer);
  // }, [result]);
  let answers = [];
  const correct = result.props.correct_answer;
  answers.push(correct);
  answers.push(result.props.incorrect_answers[0]);
  answers.push(result.props.incorrect_answers[1]);
  answers.push(result.props.incorrect_answers[2]);
  answers.sort(() => Math.random() - 0.5);

  function isCorrect(selection) {
    if (selection === correct) {
      console.log('Correct!!!');
    } else {
      console.log('YOU DUMB');
    }
  }
  return (
    <>
      <p>
        <button onClick={() => isCorrect(answers[0])}>
          {he.decode(answers[0])}
        </button>
        <button onClick={() => isCorrect(answers[1])}>
          {he.decode(answers[1])}
        </button>
        <button onClick={() => isCorrect(answers[2])}>
          {he.decode(answers[2])}
        </button>
        <button onClick={() => isCorrect(answers[3])}>
          {he.decode(answers[3])}
        </button>
      </p>
    </>
  );
};
