import {useRef} from 'react';

export default function Answers({answers, selectedAnswer, ansState, onSelect}) {

  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return <ul id="answers">
    {shuffledAnswers.current.map(answer => {
      let classes;
      const isSelected = answer === selectedAnswer;

      if (ansState === 'answered' && isSelected) {
        classes = 'selected';
      }

      if ((ansState === 'correct' || ansState === 'wrong') && isSelected) {
        classes = ansState;
      }

      return <li key={answer} className="answer">
        <button onClick={() => onSelect(answer)} className={classes} disabled={ansState !== ''}>{answer}</button>
      </li>
    })}
  </ul>
}
