const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskChecklist,updateTaskStatus } = require("../controllers/taskController");

const router = express.Router();

//Task management routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getDashboardData);
router.get("/", protect, getTasks);
router.get("/:id", protect, adminOnly, getTaskById);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete(":/id", protect, adminOnly, deleteTask);
router.put("/:id/status", protect, updateTaskStatus);
router.put("/:id/todo", protect, updateTaskChecklist);

module.exports = router;