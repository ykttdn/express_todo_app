import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get("/todos", (_, res) => {
  const todos = [
    { id: 1, name: "buy eggs" },
    { id: 2, name: "clean the kitchen" },
    { id: 3, name: "wash the clothes" },
  ];

  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
