const express = require("express");
const app = express();

const token = null;

// 미들웨어
const checkAuth = (req, res, next) => {
  console.log("이건 첫번째");
  next();
};
const checkToken = (req, res, next) => {
  if (token) {
    next();
  }
  res.send("너 토큰 없다");
};

// get
const getUser = (req, res) => {
  console.log("이건 유저");
  res.send("user info");
};

app.get("/users", checkAuth, checkToken, getUser);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/about", (req, res) => {
//   res.send("hello about");
// });

app.listen(5000, () => {
  console.log("server is on 5000");
});
