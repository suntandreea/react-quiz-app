import {useState} from 'react';
import Answers from './Answers.jsx';
import Timer from './Timer.jsx';
import QUESTIONS from '../questions.js';

export default function Question({idx, onSelectAnswer, onSkipAnswer}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[idx].answers[0] === answer
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);

    }, 1000 );
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return <div id="question">
    <Timer timeout={15000} onTimeout={onSkipAnswer} />
    <h2>
      {QUESTIONS[idx].text}
    </h2>
    <Answers answers={QUESTIONS[idx].answers}
             selectedAnswer={answer.selectedAnswer}
             ansState={answerState} onSelect={handleSelectAnswer} />
  </div>
}
