const Task = require('../models/task');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ error: error.message });
		//catch is for errors that are not handled by the code, to prevent indefinite loading.
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOne({ _id: taskID });
		//if not match
		if (!task) {
			return res
				.status(404)
				.json({ error: `Task not found with id: ${taskID}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		});
		//if not match
		if (!task) {
			return res
				.status(404)
				.json({ error: `Task not found with id: ${taskID}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskID });
		//if not match
		if (!task) {
			return res
				.status(404)
				.json({ error: `Task not found with id: ${taskID}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
