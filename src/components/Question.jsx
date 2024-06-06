import Answers from './Answers.jsx';
import Timer from './Timer.jsx';

export default function Question({text, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}) {

  return <div id="question">
    <Timer timeout={3000} onTimeout={onSkipAnswer} />
    <h2>
      {text}
    </h2>
    <Answers answers={answers}
             selectedAnswer={selectedAnswer}
             ansState={answerState} onSelect={onSelectAnswer} />
  </div>
}
