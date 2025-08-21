const Task = require("../models/Task");

// @desc Get all tasks (admin: all, user: only asssigned tasks)
// @route GET/api/tasks
// @acess Private
const getTasks = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Get tasks by ID
// @route GET/api/tasks/:id
// @acess Private
const getTaskById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Create a new task (Admin only)
// @route GET/api/tasks/
// @acess Private(Admin)
const createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body;

        if (!Array.isArray(assignedTo)) {
            return res.status(400).json({ message: "Assigned to must be an array of user IDs" });
        }

        const task = await Task.create ({
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            createdBy: req.user._id,
            attachments,
            todoChecklist,
        });

        res.status(201).json({ message: "Task created succesfully", task});
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Update task details
// @route GET/api/tasks/:id
// @acess Private
const updateTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Delete task (Admin only)
// @route GET/api/tasks/:id
// @acess Private
const deleteTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Update task statis
// @route GET/api/tasks/:id/status
// @acess Private
const updateTaskStatus = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Update task checklist
// @route GET/api/tasks/:id/todo
// @acess Private
const updateTaskChecklist = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Dashboard Data (Admin)
// @route GET/api/tasks/dashboard-data
// @acess Private
const getDashboardData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}
// @desc Dashboard Data (User)
// @route GET/api/tasks/user-dashboard-data
// @acess Private
const getUserDashboardData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData,
};