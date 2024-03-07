/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');


const indexRouter = require("./routes/index.routes");
const { verifyAccessToken } = require("./middleware/verifyJWT");

app.use(cookieParser());
app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());
app.use(verifyAccessToken);

app.use("/", indexRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Работаем на ${PORT} порту.`);
});
