import express from "express";

const app: express.Application = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

app.use("/", express.static("./dist/web"));