# API Connect

API REST desenvolvida com **Node.js** e **Express** para gerenciamento de usuários.

O projeto foi criado como um MVP para aplicar conceitos de arquitetura REST, métodos HTTP, códigos de status, validação de dados e organização modular de uma aplicação back-end.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Nodemon
- Thunder Client
- Git
- GitHub

## Funcionalidades

A API permite realizar operações CRUD de usuários:

- Cadastrar usuário
- Listar todos os usuários
- Buscar usuário por ID
- Atualizar usuário
- Remover usuário
- Validar nome e e-mail
- Retornar erros padronizados em JSON

## Estrutura do projeto

```text
api-connect/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── data/
│   │   └── users.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── server.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/leuojesus/api-connect.git
```

Entre na pasta do projeto:

```bash
cd api-connect
```

Instale as dependências:

```bash
npm install
```

Execute o servidor em modo de desenvolvimento:

```bash
npm run dev
```

Ou execute normalmente:

```bash
npm start
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Endpoints

### Listar todos os usuários

```http
GET /users
```

Resposta de sucesso: `200 OK`

### Buscar usuário por ID

```http
GET /users/:id
```

Resposta de sucesso: `200 OK`

Caso o usuário não exista: `404 Not Found`

### Criar usuário

```http
POST /users
```

Exemplo de body:

```json
{
  "nome": "Carlos Oliveira",
  "email": "carlos@email.com"
}
```

Resposta de sucesso: `201 Created`

Caso os dados sejam inválidos: `400 Bad Request`

### Atualizar usuário

```http
PATCH /users/:id
```

Exemplo de body:

```json
{
  "nome": "Carlos Atualizado"
}
```

Resposta de sucesso: `200 OK`

Caso o usuário não exista: `404 Not Found`

### Remover usuário

```http
DELETE /users/:id
```

Resposta de sucesso: `204 No Content`

Caso o usuário não exista: `404 Not Found`

## Exemplo de resposta

```json
{
  "data": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
}
```

Em caso de erro:

```json
{
  "error": "Usuário não encontrado."
}
```

## Persistência

Os dados são armazenados temporariamente em memória por meio de um array.

Por se tratar de um MVP, os dados adicionados durante a execução são perdidos quando o servidor é reiniciado. Em uma aplicação real, essa camada poderia ser substituída por um banco de dados.

## Repositório

https://github.com/leuojesus/api-connect

## Autor

Leonardo de Jesus
