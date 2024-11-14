import express from "express";
import { getExercises } from "./database.js";
import { getExercis } from "./database.js";

const app = express();

app.get("/", (reg, res) => {
  res.send(
    `<h1>welcome to main page</h1> </br>
     <a style='font-size:25px' href='/exercises'>/exercises</a>
     `
  );
});

app.get("/exercises", async (reg, res) => {
  const exercises = await getExercises();
  res.send(exercises);
});

app.get("/exercises/:id", async (req, res) => {
  const id = req.params.id;
  const exercise = await getExercis(id);
  res.send(exercise);
});

// --------------------------------------------------------------------------------------

app.use((err, req, res) => {
  res.status(404).send("<h1>404 page not found</h1>");
  console.log(err);
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
