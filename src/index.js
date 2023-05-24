import './style.css';
import UI from './modules/uiclass.js';
import Score from './modules/main.js';

// Event for display the score on the page.
document.addEventListener('DOMContentLoaded', () => {
  UI.displayScores();
  UI.addBackgroundToList();
});

// submit Score to leaderboard
document.querySelector('.submit-score').addEventListener('submit', (e) => {
  const name = document.querySelector('#name-input').value;
  const score = document.querySelector('#score-input').value;
  // prevent defluat submit action
  e.preventDefault();
  if (name !== '' && score !== '') {
    // Istantiate to score class
    const scores = new Score(name, score);
    // add score to leaderboard
    UI.addScoreToBoard(scores);

    // add scores to localstorage

    // Clear the input fields
    UI.clearAllField();
  }
});