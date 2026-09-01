const users = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com"
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com"
  }
];

let nextId = 3;

function generateId() {
  return nextId++;
}

module.exports = {
  users,
  generateId
};