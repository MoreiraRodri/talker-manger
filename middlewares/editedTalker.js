const fs = require('fs').promises;

async function editedTalker(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const read = await fs.readFile('./talker.json', 'utf-8');
  const parser = JSON.parse(read);
  const findId = parser.findIndex((r) => r.id === parseInt(id, 10));
  parser[findId] = { ...parser[findId], name, age, talk };
  await fs.writeFile('./talker.json', JSON.stringify(parser));
  return res.status(200).json({ id: parseInt(id, 10), name, age, talk });
}

module.exports = editedTalker;