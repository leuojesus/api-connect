const { users, generateId } = require("../data/users");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// GET /users
function listUsers(req, res) {
  return res.status(200).json({
    data: users
  });
}

// GET /users/:id
function getUserById(req, res) {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuário não encontrado."
    });
  }

  return res.status(200).json({
    data: user
  });
}

// POST /users
function createUser(req, res) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      error: "Os campos nome e email são obrigatórios."
    });
  }

  if (typeof nome !== "string" || typeof email !== "string") {
    return res.status(400).json({
      error: "Nome e email devem ser textos."
    });
  }

  if (nome.trim().length === 0) {
    return res.status(400).json({
      error: "O nome não pode estar vazio."
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      error: "E-mail inválido."
    });
  }

  const emailExists = users.some(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (emailExists) {
    return res.status(400).json({
      error: "Já existe um usuário cadastrado com este e-mail."
    });
  }

  const newUser = {
    id: generateId(),
    nome: nome.trim(),
    email: email.trim()
  };

  users.push(newUser);

  return res.status(201).json({
    data: newUser
  });
}

// PATCH /users/:id
function updateUser(req, res) {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado."
    });
  }

  const { nome, email } = req.body;

  if (nome === undefined && email === undefined) {
    return res.status(400).json({
      error: "Informe pelo menos nome ou email para atualização."
    });
  }

  if (nome !== undefined) {
    if (typeof nome !== "string" || nome.trim().length === 0) {
      return res.status(400).json({
        error: "Nome inválido."
      });
    }

    users[index].nome = nome.trim();
  }

  if (email !== undefined) {
    if (typeof email !== "string" || !isValidEmail(email)) {
      return res.status(400).json({
        error: "E-mail inválido."
      });
    }

    const emailExists = users.some(
      (user) =>
        user.id !== id &&
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return res.status(400).json({
        error: "Já existe outro usuário cadastrado com este e-mail."
      });
    }

    users[index].email = email.trim();
  }

  return res.status(200).json({
    data: users[index]
  });
}

// DELETE /users/:id
function deleteUser(req, res) {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado."
    });
  }

  users.splice(index, 1);

  return res.status(204).send();
}

module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};