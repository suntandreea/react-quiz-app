import {useState} from 'react';
import QUESTIONS from '../questions.js';
import Answers from './Answers.jsx';
import Timer from './Timer.jsx';

export default function Question({idx, onSelectAnswer, onSkipAnswer}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

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

    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return <div id="question">
    <Timer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} mode={answerState} />
    <h2>
      {QUESTIONS[idx].text}
    </h2>
    <Answers answers={QUESTIONS[idx].answers}
             selectedAnswer={answer.selectedAnswer}
             ansState={answerState} onSelect={handleSelectAnswer} />
  </div>
}
