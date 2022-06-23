### Projeto desenvolvido na Trybe com foco em desenvolver as seguintes habilidades: Node e Express.

#### Projeto foi o desenvolvimento de um CRUD de palestrantes.

#### Desenvolvimento:

- [x] 1 - Crie o endpoint GET `/talker`

- O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas. Devendo retornar o `status 200`.
- Caso não exista nenhuma pessoa palestrante cadastrada o endpoint deve retornar um array vazio e o `status 200`.

- [x] 2 - Crie o endpoint GET `/talker/:id`

- O endpoint deve retornar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 200` ao fazer uma requisição `/talker/1`.
- Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint deve retornar o `status 404` e a seguinte mensagem: "Pessoa palestrante não encontrada"

- [x] 3 - Crie o endpoint POST `/login`

- O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.
- O endpoint deverá retornar um código de `status 200` com o token gerado.
- O campo `email` deverá ser um email válido. Ele é obrigatório.
- Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com a seguinte mensagem: "O campo "email" é obrigatório".
- Caso o email passado não seja um email válido retorne um código de `status 400`, com a seguinte mensagem: "O "email" deve ter o formato "email@email.com"
- O campo `password` deverá ter pelo menos 6 caracteres.
- Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com a seguinte mensagem: "O campo "password" é obrigatório"
- Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400`, com a seguinte mensagem: "O "password" deve ter pelo menos 6 caracteres"

- [x] 4 - Crie o endpoint POST `/talker`

- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;
- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
- Caso o token não seja encontrado retorne um código de `status 401`, com a seguinte mensagem: "Token não encontrado"
- Caso o token seja inválido retorne um código de `status 401`, com a seguinte mensagem: "Token inválido"
- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.
- Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com a seguinte mensagem: "O campo "name" é obrigatório"
- Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com a seguinte mensagem: "O "name" deve ter pelo menos 3 caracteres"
- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.
- Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com a seguinte mensagem: "O campo "age" é obrigatório"
- Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com a seguinte mensagem: "A pessoa palestrante deve ser maior de idade"
- O campo `talk` deverá ser um objeto com as seguintes chaves:
  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.
    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com a seguinte mensagem: "O campo "watchedAt" deve ter o formato "dd/mm/aaaa""
  - A chave `rate` deve ser um inteiro de 1 à 5.
    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com a seguinte mensagem: "O campo "rate" deve ser um inteiro de 1 à 5"
  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.
    - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com a seguinte mensagem: "O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios"
- Caso esteja tudo certo, retorne o `status 201`  e a pessoa cadastrada.
- O endpoint deve retornar o `status 201` e a pessoa palestrante que foi cadastrada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- [x] 5 - Crie o endpoint PUT `/talker/:id`

- O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
  
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
  - Caso o token não seja encontrado retorne um código de `status 401`, com a seguinte mensagem: "Token não encontrado"
  - Caso o token seja inválido retorne um código de `status 401`, com a seguinte mensagem: "Token inválido"
- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.
  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com a seguinte mensagem: "O campo "name" é obrigatório"
  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com a seguinte mensagem: "O "name" ter pelo menos 3 caracteres"
- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.
  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com a seguinte mensagem: "O campo "age" é obrigatório"
  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com a seguinte mensagem: "A pessoa palestrante deve ser maior de idade"
- O campo `talk` deverá ser um objeto com as seguintes chaves:
  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.
    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com a seguinte mensagem: "O campo "watchedAt" deve ter o formato "dd/mm/aaaa""
  - A chave `rate` deve ser um inteiro de 1 à 5.
    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com a seguinte mensagem: "O campo "rate" deve ser um inteiro de 1 à 5"
  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.
    - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com a seguinte mensagem: "O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios"
- Caso esteja tudo certo, retorne o `status 200` e a pessoa editada.
- O endpoint deve retornar o `status 200` e a pessoa palestrante que foi editada, da seguinte forma:

  ```json
  {
    "id": 1,
   "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 4
    }
  }
  ```
- [x] 6 - Crie o endpoint DELETE `/talker/:id`

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
  - Caso o token não seja encontrado retorne um código de `status 401`, com a seguinte mensagem: "Token não encontrado"
  - Caso o token seja inválido retorne um código de `status 401`, com a seguinte mensagem: "Token inválido"
- O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.

- [x] 7 - Crie o endpoint GET `/talker/search?q=searchTerm`

- O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`.
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
  - Caso o token não seja encontrado retorne um código de `status 401`, com a seguinte mensagem: "Token não encontrado"
  - Caso o token seja inválido retorne um código de `status 401`, com a seguinte mensagem: "Token inválido"
- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.
- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.
