// Forma para importar variables o funciones, cuando lo que se exporta es un objeto
const dbE = require("./src/db/crud.js");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Traer todos los usuarios
app.get("/users", function (req, res) {
  dbE.getUsers(function (arrayUsers) {
    res.json(arrayUsers);
  });
});

// Traer un usuario específico
app.get("/users/:id", function (req, res) {
  const uid = req.params.id;
  dbE.getUser(uid, function (refDoc) {
    res.json(refDoc);
  });
});

// Traer un usuario por nombre
app.get("/users/search/:name", function (req, res) {
  const name = req.params.name;
  dbE.searchUser(name, function (refDoc) {
    res.json(refDoc);
  });
});

// Crear un usuario en la DB
app.post("/users", function (req, res) {
  const user = req.body;
  console.log(req.params);
  dbE.addUser(user, function (status) {
    if (status === "Success") {
      res.status(201).json(status);
    } else {
      res.status(503).json(status);
    }
  });
});

// Actualizar totalmente los datos de un usuario en la DB
app.put("/users/:id", function (req, res) {
  const uid = req.params.id;
  const user = req.body;

  dbE.updateUserTotally(uid, user, function (status) {
    res.json(status);
  });
});

// Actualizar parcialmente los datos de un usuario en la DB
app.patch("/users/:id", function (req, res) {
  const uid = req.params.id;
  const user = req.body;

  dbE.updateUserPartially(uid, user, function (status) {
    res.json(status);
  });
});

// Borrar a un usuario de la base de datos
app.delete("/users/:id", function (req, res) {
  const uid = req.params.id;
  dbE.deleteUser(uid, function (status) {
    res.json(status);
  });
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
