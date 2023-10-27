import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router";

const TasksListPage = lazy(() => import("./tasks/TaskPage"));
const TaskDetailsPage = lazy(() => import("./detailed/TaskPage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TasksListPage />} />
            <Route path="/:taskId" element={<TaskDetailsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
