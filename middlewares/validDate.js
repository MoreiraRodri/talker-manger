function validDate(req, res, next) {
  const { talk: { watchedAt } } = req.body;
  const testDateRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  //  https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check 
  if (!watchedAt.match(testDateRegex)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 
  next();
}

module.exports = validDate;
