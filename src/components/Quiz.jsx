import {useCallback, useState} from 'react';
import completeImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

export default function Quiz() {

  const [answers, setAnswers] = useState([]);

  const activeQuestionIdx = answers.length;
  const isCompleted = activeQuestionIdx === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selection) {
    setAnswers((prevAnswers) => [...prevAnswers, selection]);
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isCompleted) {
    return <div id="summary">
      <img src={completeImg} alt="Image with a completed quiz" />
      <h2>Quiz completed!</h2>
    </div>
  }


  return <div id="quiz">
    <Question key={activeQuestionIdx}
              idx={activeQuestionIdx}
              onSelectAnswer={handleSelectAnswer}
              onSkipAnswer={handleSkipAnswer} />
  </div>
}
