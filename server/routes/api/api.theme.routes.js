/* eslint-disable @typescript-eslint/no-var-requires */
const router = require('express').Router();
const { Theme, Question, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const theme = await Theme.findAll({
      include: {
        model: Question,
      },
    });
    console.log(theme);
    res.json({ theme });
  } catch ({ message }) {
    res.json({ type: 'theme router', message });
  }
});

module.exports = router;

router.post('/seting', async (req, res) => {
  let userr;
  try {
    const { questions, answer, user } = req.body;
    console.log(questions, answer);
    console.log(questions, answer, user);
    const question = await Question.findOne({
      where: { id: questions.id },
    });
    if (question.answer === answer) {
      userr = await User.findOne({ where: { id: user.id } });
      await User.update(
        { score: question.points + userr.score },
        { where: { id: user.id } }
      );
      userr = await User.findOne({ where: { id: user.id } });
      res.json({ message: 'правильно', user: userr });
      return;
    }
    userr = await User.findOne({ where: { id: user.id } });
    await User.update(
      { score: userr.score - question.points },
      { where: { id: user.id } }
    );
    userr = await User.findOne({ where: { id: user.id } });
    res.json({ message: 'Неправильно', user: userr });
  } catch ({ message }) {
    res.json({ type: 'theme router', message });
  }
});

module.exports = router;
