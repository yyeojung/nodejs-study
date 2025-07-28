const Task = require("../model/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const { userId } = req;
    const newTask = new Task({ task, isComplete, author: userId });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).populate("author");
    res.status(200).json({ status: "ok", data: taskList });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error });
  }
};

taskController.putTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const { id } = req.params;
    const updateTask = await Task.updateOne(
      { _id: id },
      { $set: { task: task, isComplete: isComplete } }
    );
    res.status(200).json({ status: "ok", data: updateTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Task.deleteOne({ _id: id });
    res.status(200).json({ status: "ok", data: deleteTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error });
  }
};

module.exports = taskController;
