const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
const cors = require("cors");
const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI /*, { useNewUrlParser: true }*/)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("server on 5000");
});

// 1. 라우터
// 2. 모델
// 3. 데이터를 저장 (이미 가입된 유저 유무, 패스워드 암호화)
// 4. 응답을 보낸다

// * 로그인 확인
// 1. 라우터 설정
// 2. 이메일 패스워드 정보 읽어오기
// 3. 이메일을 가지고 유저정보 가져오기
// 4. 이 유저의 디비에 있는 패스워드와 프론트엔드 패스워드가 같은지 비교
// 5. 같다면 토큰 발행
// 6. 틀리면 에러메세지 보냄
// 7. 응답으로 유저정보 + 토큰 보냄
