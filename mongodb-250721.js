const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const inventory = database.collection("users");

  // const 문제1 = await inventory.insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" },
  // });
  // const array = [
  //   {
  //     item: "journal",
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: "cm" },
  //     status: "A",
  //   },
  //   {
  //     item: "notebook",
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "A",
  //   },
  //   {
  //     item: "paper",
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "D",
  //   },
  //   {
  //     item: "planner",
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: "cm" },
  //     status: "D",
  //   },
  //   {
  //     item: "postcard",
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: "cm" },
  //     status: "A",
  //   },
  // ];
  // const 문제2 = await inventory.insertMany(array);
  // console.log(문제2);

  // const 문제3 = await inventory.find({}).toArray();
  // const 문제4 = await inventory.find({ status: "D" }).toArray();
  // const 문제5 = await inventory
  //   .find({
  //     status: "A",
  //     qty: { $eq: 50 },
  //   })
  //   .toArray();
  // const 문제6 = await inventory
  //   .find({
  //     status: { $in: ["A", "B"] },
  //   })
  //   .toArray();
  // const 문제7 = await inventory
  //   .find({
  //     status: "A",
  //     qty: { $lt: 30 },
  //   })
  //   .toArray();
  // const 문제8 = await inventory
  //   .find({
  //     $or: [{ status: "A" }, { qty: { $lt: 30 } }],
  //   })
  //   .toArray();
  // const 문제9 = await inventory
  //   .find({
  //     "size.uom": "in",
  //   })
  //   .toArray();
  // const 문제10 = await inventory
  //   .find({
  //     "size.h": { $gt: 10 },
  //   })
  //   .toArray();

  // const students = [
  //   {
  //     _id: 1,
  //     test1: 95,
  //     test2: 92,
  //     test3: 90,
  //     modified: new Date("01/05/2020"),
  //   },
  //   {
  //     _id: 2,
  //     test1: 98,
  //     test2: 100,
  //     test3: 102,
  //     modified: new Date("01/05/2020"),
  //   },
  //   { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  // ];
  // const 문제11 = await inventory.insertMany(students);
  // const 문제11 = await inventory.updateOne({ _id: 3 }, { $set: { test3: 98 } });
  // const 문제12 = await inventory.updateMany(
  //   {},
  //   { $set: { test1: 0, status: "modified" } }
  // );

  // const 문제13 = await inventory.deleteOne({ test2: 92 });
  const 문제14 = await inventory.deleteMany({ test1: 0 });
  console.log(문제14);
}
run();
