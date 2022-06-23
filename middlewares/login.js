const crypto = require('crypto');

function emailValidation(email) {
  if (typeof email === 'undefined') {
    return 'O campo "email" é obrigatório';
  }
  const regexEmail = /\S+@\S+\.\S+/;
  // regex obtido do StackOverFlow
  const emailValid = regexEmail.test(email);
   if (emailValid === false) {
    return 'O "email" deve ter o formato "email@email.com"';
  }
}

function passwordValidation(password) {
  if (typeof password === 'undefined') {
    return 'O campo "password" é obrigatório';
  }
  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
}

function login(req, res) {
  const { email, password } = req.body;
  const emailMessageReturn = emailValidation(email);
  const passwordMessageReturn = passwordValidation(password);
  const tokenGeneration = crypto.randomBytes(8).toString('hex');
  // gerador de token obtido do StackOverFlow:
  // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
  if (emailMessageReturn) {
    return res.status(400).json({ message: emailMessageReturn });
  }
  if (passwordMessageReturn) {
    return res.status(400).json({ message: passwordMessageReturn });
  }
  return res.status(200).json({ token: tokenGeneration });
}

module.exports = login;