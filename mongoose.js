const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-test");

const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) {
          throw new Error("not an email");
        }
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

// const newUser = new User({
//   name: "hongshii2",
//   email: "email@naver.com",
//   password: "   1212312   33",
// });

// newUser.save().then((value) => console.log("value is", value));

User.find({ password: "123" })
  .select("name email")
  // .select("name ")
  //.select("name -_id") // id도 안받기
  .then((value) => console.log("all data", value));
