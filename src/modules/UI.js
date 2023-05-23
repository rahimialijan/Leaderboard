import Store from './store.js';

class UI {
  static displayScores() {
    const scores = Store.getScore();
    scores.forEach((score) => UI.addScoreToBoard(score));
  }

  static addScoreToBoard(score) {
    const ul = document.querySelector('.submited-scores');
    const li = document.createElement('li');
    li.classList.add('name-score');
    li.innerHTML = `
        <span>${score.name}</span>
        <span>${score.score}</span>
        `;
    ul.appendChild(li);
  }

  static clearAllField() {
    document.getElementById('name-input').value = '';
    document.getElementById('score-input').value = '';
  }

  static addBackgroundToList() {
    const scoreList = document.querySelectorAll('.name-score');
    for (let i = 0; i < scoreList.length; i += 1) {
      if (i % 2 === 0) {
        scoreList[i].classList.add('odd');
      } else {
        scoreList[i].classList.add('even');
      }
    }
  }
}

export default UI;