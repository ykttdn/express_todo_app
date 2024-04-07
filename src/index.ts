import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
