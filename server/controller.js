//user input wishes
let wishes = [];
let numRemainingWishes = 3;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A faithful friend is a strong defense.",
      "A hunch is creativity trying to tell you something.",
      "A pleasant surprise is waiting for you.",
      "Adventure can be real happiness.",
      "At the touch of love, everyone becomes a poet.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);

    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getWishes: (req, res) => {
    res.status(200).send(wishes);
  },

  createWish: (req, res) => {
    const { wish } = req.body;
    if (numRemainingWishes) {
      wishes.push(wish);
      numRemainingWishes -= 1;
      res.sendStatus(200);
      return;
    }
    res.sendStatus(403);
  },
  resetWishes: (req, res) => {
    wishes = [];
    numRemainingWishes = 3;
    res.sendStatus(200);
  },
};
