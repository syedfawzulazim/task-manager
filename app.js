const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/connect");
const tasks = require("./routes/task");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
