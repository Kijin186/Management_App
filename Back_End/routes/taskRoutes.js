const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskChecklist,updateTaskStatus } = require("../controllers/taskController");

const router = express.Router();

//Task management routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //Get all task (Admin: all, User: assigned)
router.get("/:id", protect, adminOnly, getTaskById); //Get task by ID
router.post("/", protect, createTask);//Created a task (Admin only)
router.put("/:id", protect, updateTask);//Update task details
router.delete("/:id", protect, adminOnly, deleteTask);//Delete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus);//Update task status
router.put("/:id/todo", protect, updateTaskChecklist);//Update task checklist

module.exports = router;