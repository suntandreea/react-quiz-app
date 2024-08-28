import completeImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({userAnswers}) {
  const skippedAnswers = Math.round(userAnswers.filter(answer => answer === null).length / QUESTIONS.length * 100);
  const correctAnswers = Math.round(userAnswers.filter((answer, idx) => answer === QUESTIONS[idx].answers[0]).length / QUESTIONS.length * 100);
  const wrongAnswers = 100 - skippedAnswers - correctAnswers;

  return <div id="summary">
    <img src={completeImg} alt="Image with a completed quiz" />
    <h2>Quiz completed!</h2>
    <div id="summary-stats">
      <p>
        <span className="number">{skippedAnswers}%</span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">{correctAnswers}%</span>
        <span className="text">answered correct</span>
      </p>
      <p>
        <span className="number">{wrongAnswers}%</span>
        <span className="text">answered wrong</span>
      </p>
    </div>
    <ol>
      {userAnswers.map((answer, idx) => {
        let cssClass = 'user-answer';

        if (answer === null) {
          cssClass += ' skipped';
        } else if (answer === QUESTIONS[idx].answers[0]) {
          cssClass += ' correct';
        } else {
          cssClass += ' wrong';
        }

        return <li key={idx}>
          <h3>{idx + 1}</h3>
          <p className="question">{QUESTIONS[idx].text}</p>
          <p className={cssClass}>{answer ?? "Skipped"}</p>
        </li>
      })}
    </ol>
  </div>
}
