import express from "express";

const app = express();

app.get("/", async (_, res) => {
  res.send("hejsan");
});

export { app };
