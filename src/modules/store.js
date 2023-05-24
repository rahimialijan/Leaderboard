class Store {
  static getScore() {
    let scores;
    if (localStorage.getItem('scores') === null) {
      scores = [
        {
          name: "alijan",
          score: 50,
        },
        {
          name: "najib",
          score: 40,
        },
        {
          name: "Bashir",
          score: 100,
        },
        {
          name: "Dawod",
          score: 70,
        },
        {
          name: "Ali",
          score: 50,
        },
        {
          name: "naim",
          score: 80,
        },
        {
          name: "jawad",
          score: 30,
        },
        {
          name: "najib",
          score: 40,
        },
      ];
    } else {
      scores = JSON.parse(localStorage.getItem('scores'));
    }

    return scores;
  }

  static addScore(score) {
    const scores = Store.getScore();
    scores.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}

export default Store;