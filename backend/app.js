const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
dotenv.config();

const reviewRouter = require("./routers/userRatingRoutes");

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/user/review", reviewRouter);

app.listen(process.env.PORT, console.log(`Running on ${process.env.PORT}`));
