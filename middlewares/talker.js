const fs = require('fs').promises;

async function getTaker(_req, res) {
  const all = await fs.readFile('./talker.json', 'utf-8');
  return res.status(200).json(JSON.parse(all));
}

module.exports = getTaker;
