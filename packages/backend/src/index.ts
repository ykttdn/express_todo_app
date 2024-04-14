import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));

app.get("/api/", (_, res) => {
  res.send("Hello world");
});

app.get("/api/todos", (_, res) => {
  const todos = [
    { id: 1, todo: "buy eggs" },
    { id: 2, todo: "clean the kitchen" },
    { id: 3, todo: "wash the clothes" },
  ];

  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
