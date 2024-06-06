import {useCallback, useState} from 'react';
import completeImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

export default function Quiz() {

  const [ansState, setAnsState] = useState('');
  const [answers, setAnswers] = useState([]);
  const activeQuestionIdx = ansState === '' ? answers.length : answers.length - 1;
  const isCompleted = activeQuestionIdx === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selection) {
    setAnsState('answered');
    setAnswers((prevAnswers) => [...prevAnswers, selection]);
    setTimeout(() => {
      if (selection === QUESTIONS[activeQuestionIdx].answers[0]) {
        setAnsState('correct');
      } else {
        setAnsState('wrong');
      }
      setTimeout(() => {
        setAnsState('');
      }, 2000);
    }, 1000)
  }, [activeQuestionIdx]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isCompleted) {
    return <div id="summary">
      <img src={completeImg} alt="Image with a completed quiz" />
      <h2>Quiz completed!</h2>
    </div>
  }


  return <div id="quiz">
    <Question key={activeQuestionIdx}
              text={QUESTIONS[activeQuestionIdx].text} answers={QUESTIONS[activeQuestionIdx].answers}
              onSelectAnswer={handleSelectAnswer} answerState={ansState} selectedAnswer={answers[answers.length - 1]}
              onSkipAnswer={handleSkipAnswer} />
  </div>
}
