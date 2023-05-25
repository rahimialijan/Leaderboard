const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yAzAJFJQSZLJxVm1Hh1T/scores/';
class UI {
  /*
  static displayScores = async () => {
    const scores = await (await fetch(api)).json();
    scores.result.forEach((score) => UI.addScoreToBoard(score));
  }
  */
  static addScoreToBoard(score) {
    const ul = document.querySelector('.submited-scores');
    const li = document.createElement('li');
    li.classList.add('name-score');
    li.innerHTML = `
        <span>${score.user}</span>
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

  static postUserInfo = async (user, score) => {
    const response = await fetch(api,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ user, score }),
      });
    const data = await response.json();
    return data.result;
  };

  static playGame() {

  }

  static refreshData = async () => {
    const scores = await (await fetch(api)).json();

    const arr = [];
    scores.result.forEach((res) => {
      if (res.score > 200) {
        arr.push(res);
      }
    });
    /*
    const filteredScores = scores.filter((score) => score.score > 200);
    */
    arr.forEach((score) => UI.addScoreToBoard(score));
  };

  static clearScoreList() {
    const scoreList = document.querySelector('.submited-scores');
    scoreList.innerHTML = ''; // Remove all existing list items
  }
}

export default UI;