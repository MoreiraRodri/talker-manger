const express = require('express');
const bodyParser = require('body-parser');

const talker = require('./middlewares/talker');
const talkerId = require('./middlewares/talkerId');
const login = require('./middlewares/login');
const tokenValidation = require('./middlewares/tokenValidation');
const validName = require('./middlewares/validName');
const validAge = require('./middlewares/validAge');
const validDate = require('./middlewares/validDate');
const validRate = require('./middlewares/validRate');
const validTalk = require('./middlewares/validTalk');
const createTalker = require('./middlewares/createTalker');
const deleteById = require('./middlewares/deleteById');
const talkerSearch = require('./middlewares/talkerSearch');
const editedTalker = require('./middlewares/editedTalker');

const app = express();
// app.use(express.json());
app.use(bodyParser.json());

app.get('/talker/search', tokenValidation, talkerSearch);
app.get('/talker', talker);
app.get('/talker/:id', talkerId);
app.post('/login', login);
app.post('/talker', tokenValidation, 
validName, validAge, validTalk, validDate, validRate, createTalker);
app.put('/talker/:id', tokenValidation, 
validName, validAge, validTalk, validDate, validRate, editedTalker);
app.delete('/talker/:id', tokenValidation, deleteById);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
