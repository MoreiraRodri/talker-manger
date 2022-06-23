const fs = require('fs').promises;

async function createTalker(req, res) {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const read = await fs.readFile('./talker.json', 'utf-8');
  const parser = JSON.parse(read);
  const id = parser.length + 1;
  const newTalker = { name, age, id, talk: { watchedAt, rate } };
  parser.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(parser, null, ''));
  return res.status(201).json(newTalker);
}

module.exports = createTalker;
