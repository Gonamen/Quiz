/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();

const apiThemeRouter = require('./api/api.theme.routes');
const apiAuthRouter = require("./api/api.auth.routes");

router.use('/api/theme', apiThemeRouter);
router.use("/api/auth", apiAuthRouter);

module.exports = router;
