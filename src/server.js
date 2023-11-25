const express = require("express");
const app = express();
require("dotenv").config();
const hostName = process.env.HOST_NAME;
const port = process.env.PORT;
const webRoutes = require("./routes/web.js");
const configViewEngine = require("./config/ViewEngine");
// config static file

configViewEngine(app);
app.use("/", webRoutes);
app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
