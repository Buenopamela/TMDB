const express = require("express");
const volleyball = require("volleyball");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const auth = require("./config/auth");
const routes = require("./routes");
const db = require("./config/db");


const server = express(); // inicia servidor express

server.use(volleyball); //

server.use(helmet()); //setea headers
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(cookieParser());

server.use(
  session({
    secret: "user",
    resave: true,
    saveUninitialized: true,
  })
);

server.use(passport.initialize());
server.use(passport.session());

passport.use(auth.localStrategyInstance);

passport.serializeUser(auth.serializeUserCb);

passport.deserializeUser(auth.deserializeUserCb);

server.use("/api", routes);

server.use("/api", (req, res) => {
  res.sendStatus(404);
});

server.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  server.listen(3001, () => console.log("Server listening on port 3001"));
});
