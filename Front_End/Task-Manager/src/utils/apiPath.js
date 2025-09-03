export const BASE_URL = "http://localhost:8000";

//util/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", //Register new user
        LOGIN: "/api/auth/login", //Authenticate user
        GET_PROFILE: "/api/auth/profile", //Get login user details
    },

    USERS: {
        GET_ALL_USERS: "/api/users", //Get all user (admin)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by ID
        CREATED_USER: "/api/users", //Create new user (admin)
        UPDATE_USER: (userId) => `/api/users/${userId}`, //Update user details
        DELETE_USER: (userId) => `/api/users/${userId}`, //Delete user
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get dashboard data
        GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", //Get User dashboard data
        GET_ALL_TASKS: "/api/tasks", //Get all task (admin), only assigned task (user)
        GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, //Get task by ID
        CREATE_TASK: "/api/tasks", //Create new task
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, //Update task details
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, //Delete a task

        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, //Update task status
        UPDATE_TASK_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, //Update todo checklist
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", //Download all tasks as an Excel
        EXPORT_USERS: "/api/reports/export/users", //Download user-task report
    },

    IMAGE: {
        UPLOAD_IMAGE: "api/auth/upload-image",
    },
};