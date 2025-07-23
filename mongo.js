const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const users = database.collection("users");

  // 입력 create
  // const userData = await users.insertOne({
  //   name: "hongshii",
  //   age: 100,
  // });

  // const userList = [
  //   {
  //     name: "user1",
  //     age: 100,
  //   },
  //   {
  //     name: "user2",
  //     age: 200,
  //   },
  // ];
  // const userListResult = await users.insertMany(userList);
  // console.log(userListResult);

  // 조회 find
  // const findUser = await users.findOne({ age: { $gt: 10 } });
  // console.log(findUser);
  // findOne 조건에 맞는게 여러개 있어도 하나만 반환
  const userData = await users
    .find({ name: "hongshii" })
    .project({ name: 0, _id: 0 })
    .toArray();
  console.log(userData);
  // _id는 명시적으로 제외하려면 반드시 '_id'

  // 수정 update

  // const updateUser = await users.updateOne(
  //   { name: "user1" },
  //   { $set: { age: 20 } }
  // );
  // console.log(updateUser);

  // 삭제 delete
  // const deleteUser = await users.deleteMany({ age: { $gt: 100 } });
  // console.log(deleteUser);
}
run();
