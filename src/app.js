import express from "express";

const app = express();

//configuraciones para poder recibir datos en formato json por body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Esta es la pagina principal, perdon por el estilo",
  });
});

app.get("/pokedex", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: ["Charmander", "Bulbasaur", "Squirtle"],
  });
});

//http://localhost:8080/pokedex/charmander?tipo=fuego
app.get("/pokedex/:pokemon", (req, res) => {
  const pokemon = req.params.pokemon;
  const tipo = req.query.tipo;
  res.status(200).json({
    status: "ok",
    message: `Este es tu pokemon: ${pokemon} y es tipo ${tipo}`,
  });
});

app.post("/pokedex", (req, res) => {
  const pokemon = req.body;
  console.log(pokemon);
  res.status(201).json({
    status: "ok",
    message: `Pokemon creado: ${pokemon}`,
  });
});

app.listen(8080, () => {
  console.log(`🟢 El servidor esta corriendo en el puerto 8080`);
});
