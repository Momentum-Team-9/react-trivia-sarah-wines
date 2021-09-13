import React, { useEffect, useState } from 'react';
import he from 'he';

export const Answers = (result) => {
  // useEffect(() => {
  //   console.log(result.props.correct_answer);
  // }, [result]);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCorrect = (selection) => {
    if (selection === correct) {
      document.getElementById('0').classList.remove('default');
      setIsCorrect(true);
    } else {
      document.getElementById('0').classList.remove('default');
      setIsCorrect(false);
    }
  };

  let answers = [];
  const correct = result.props.correct_answer;
  answers.push(correct);
  answers.push(result.props.incorrect_answers[0]);
  answers.push(result.props.incorrect_answers[1]);
  answers.push(result.props.incorrect_answers[2]);
  answers.sort(() => Math.random() - 0.5);

  // function setIsCorrect(selection) {
  //   if (selection === correct) {
  //     isCorrect = true;
  //     console.log(isCorrect);
  //   } else {
  //     isCorrect = false;
  //     console.log(isCorrect);
  //   }
  // }

  return (
    <>
      <p id="0" className={`default ${isCorrect ? 'correct' : 'wrong'}`}>
        <button className="answers" onClick={() => handleCorrect(answers[0])}>
          {he.decode(answers[0])}
        </button>
        <button className="answers" onClick={() => handleCorrect(answers[1])}>
          {he.decode(answers[1])}
        </button>
        <button className="answers" onClick={() => handleCorrect(answers[2])}>
          {he.decode(answers[2])}
        </button>
        <button className="answers" onClick={() => handleCorrect(answers[3])}>
          {he.decode(answers[3])}
        </button>
      </p>
    </>
  );
};
