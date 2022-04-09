const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/connect");
const tasks = require("./routes/task");
const notFound = require("./middleware/not-found");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = 3000;

//routes
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
