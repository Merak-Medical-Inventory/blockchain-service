require("./loadEnv");

const express = require("express");
const cors = require("cors");

const { handleError } = require("./helpers/ErrorHandler");
const { logger } = require("./helpers/Logger");
const appRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.use('/api',appRouter);

app.use("/", (req, res) => {
  res.send("hello world");
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});