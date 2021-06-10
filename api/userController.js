const scorers = [
  "Ali",
  "Badar",
  "Callum",
  "Danish",
  "Elon",
  "Faisal",
  "Ghani",
  "Hammad",
  "Irfan",
];
const scores = [100, 200, 300, 400, 500, 600, 650, 750, 800];

exports.getReport = async (req, res) => {
  let elite = 0;
  let excellent = 0;
  let good = 0;
  let fair = 0;
  let poor = 0;
  scores.map((getScore) => {
    if (getScore > 0 && getScore <= 300) {
      poor = parseInt(poor) + 1;
      // console.log(poor);
    } else if (getScore > 300 && getScore <= 500) {
      fair = parseInt(fair) + 1;
      // console.log(fair);
    } else if (getScore > 500 && getScore <= 650) {
      good = parseInt(good) + 1;
      // console.log(good);
    } else if (getScore > 650 && getScore <= 750) {
      excellent = parseInt(excellent) + 1;
      // console.log(excellent);
    } else if (getScore > 750 && getScore <= 800) {
      elite = parseInt(elite) + 1;
      // console.log(elite);
    }
  });
  let Rank = {
    elite: elite,
    excellent: excellent,
    good: good,
    fair: fair,
    poor: poor,
  };
  return res.status(200).send({
    success: true,
    message: "Report of Users on the base of their scores...!!!",
    Rank,
  });
};

exports.getUserRecord = async (req, res) => {
  let array = [];
  try {
    scores.map((score) => {
      //console.log(score);
      scorers.map((name) => {
        if (scores.indexOf(score) == scorers.indexOf(name)) {
          if (score > 0 && score <= 300) {
            array.push({ name: name, score: score, Rank: "Poor" });
          } else if (score > 300 && score <= 500) {
            array.push({ name: name, score: score, Rank: "Fair" });
          } else if (score > 500 && score <= 650) {
            array.push({ name: name, score: score, Rank: "Good" });
          } else if (score > 650 && score <= 750) {
            array.push({ name: name, score: score, Rank: "Excellent" });
          } else if (score > 750 && score <= 800) {
            array.push({ name: name, score: score, Rank: "Elite" });
          }
        }
      });
    });
    return res.status(200).send(array);
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.getUserRank = async (req, res) => {
  const scorer = req.body.name;
  const scoreOfUser = req.body.score;
  const scorerIndex = scorers.indexOf(scorer);
  const userIndex = scores.indexOf(parseInt(scoreOfUser));
  let array = [];

  try {
    if (scorerIndex != userIndex) {
      return res
        .status(400)
        .send({ success: false, message: "conditions not matched" });
    } else if (scoreOfUser > 0 && scoreOfUser <= 300) {
      array.push({ Rank: "Poor" });
    } else if (scoreOfUser > 300 && scoreOfUser <= 500) {
      array.push({ Rnk: "Fair" });
    } else if (scoreOfUser > 500 && scoreOfUser <= 650) {
      array.push({ Rank: "Good" });
    } else if (scoreOfUser > 650 && scoreOfUser <= 750) {
      array.push({ Rank: "Excellent" });
    } else if (scoreOfUser > 750 && scoreOfUser <= 800) {
      array.push({ Rank: "Elite" });
    }

    // console.log(grading);
    return res.send(array);
  } catch (error) {
    return res.status(400).send(error);
  }
};
