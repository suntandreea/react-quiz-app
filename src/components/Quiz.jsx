import {useCallback, useState} from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {

  const [answers, setAnswers] = useState([]);

  const activeQuestionIdx = answers.length;
  const isCompleted = activeQuestionIdx === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selection) {
    setAnswers((prevAnswers) => [...prevAnswers, selection]);
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isCompleted) {
    return <Summary userAnswers={answers} />
  }


  return <div id="quiz">
    <Question key={activeQuestionIdx}
              idx={activeQuestionIdx}
              onSelectAnswer={handleSelectAnswer}
              onSkipAnswer={handleSkipAnswer} />
  </div>
}
