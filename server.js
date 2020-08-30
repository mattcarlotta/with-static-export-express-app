const dotenv = require("dotenv");
// import ENVs from ".env.local" and append to process
dotenv.config({ path: ".env.local" });
const express = require("express");
const address = require("address");
const chalk = require("chalk");

// create express web server instance
const app = express();
// pull out ENVs from process
const { LOCALHOST, PORT } = process.env;
// get the Local IP address
const LOCALIP = address.ip();

// tell express to serve up production assets from the out directory
app.use(express.static("out"));

// tell express to listen for incoming connections on the specified PORT
app.listen(PORT, (err) => {
  if (!err) {
    // log the LOCALHOST and LOCALIP addresses where the app is running
    console.log(
      `\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.blue(
        "Application is running at"
      )} ${chalk.rgb(235, 220, 52).bold(LOCALHOST)} ${chalk.blue(
        "or"
      )} ${chalk.rgb(235, 220, 52).bold(`http://${LOCALIP}:${PORT}`)}\n`
    );
  } else {
    console.err(`\nUnable to start server: ${err}`);
  }
});
