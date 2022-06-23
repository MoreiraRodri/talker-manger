const fs = require('fs').promises;

async function getTakerById(req, res) {
  const { id } = req.params;
  const all = await fs.readFile('./talker.json', 'utf-8');
  
  const allId = JSON.parse(all);
  
  const encontradoId = allId.find((i) => i.id === parseInt(id, 10));

  if (typeof encontradoId === 'undefined') {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(encontradoId);
}

module.exports = getTakerById;
