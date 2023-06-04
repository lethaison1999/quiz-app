import React from 'react';
import './styles.scss';
import imgLoading from '../../../../assets/image/loading-quiz.svg';
function TextQuestion({ dataQuestion, numberQuestion, loading }) {
  const question = dataQuestion && dataQuestion.question;

  if (loading) return <img src={imgLoading} className="loading-app" alt="loading" />;

  return (
    <div className="wrap-text">
      <span className="count-question">Question {numberQuestion + 1}/10</span>
      {question !== 0 && <span className="title-question">{question}</span>}
    </div>
  );
}

export default TextQuestion;
