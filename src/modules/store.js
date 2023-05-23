

class Store{
    static getScore(){
        let scores;
        if (localStorage.getItem('scores')===null){
            scores=[];
        }else{
            scores=JSON.parse(localStorage.getItem('scores'));
        };

        return scores;
    }

    static addScore(score){
        const scores=Store.getScore();
        scores.push(score);
        localStorage.setItem('scores', JSON.stringify(scores));
    }

}

export default Store;