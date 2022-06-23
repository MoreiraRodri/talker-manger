const fs = require('fs').promises;

async function searchTalker(req, res) {
  try {
  const { name } = req.query;
  const all = await fs.readFile('./talker.json', 'utf-8');
  const allName = JSON.parse(all);
  if (!name) return res.status(200).json(allName);
  const filterName = allName.filter((r) => 
  r.name.includes(name));
  if (filterName.length === 0) {
    return res.status(200).json([]);
  }
  return res.status(200).json(filterName);
} catch (error) {
  return (error);
} 
}

module.exports = searchTalker;
