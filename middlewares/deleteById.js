const fs = require('fs').promises;

async function deleteTalker(req, res) {
  const { id } = req.params;
  const all = await fs.readFile('./talker.json', 'utf-8');
  const allToken = JSON.parse(all);
  const findingToken = allToken.findIndex((r) => r.id === parseInt(id, 10));
  allToken.splice(findingToken, 1);
  await fs.writeFile('./talker.json', JSON.stringify(allToken));
  return res.status(204).end();
}

module.exports = deleteTalker;
