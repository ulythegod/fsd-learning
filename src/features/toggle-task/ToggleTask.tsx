import { Checkbox } from "antd";
import { taskModel } from "../../entities/task";

export type ToggleTaskProps = {
    taskId: number;
    withStatus?: boolean;
}

export const ToggleTask = ({taskId}: ToggleTaskProps) => {
    const task = taskModel.useTask(taskId);
    if (!task) {
        return null;
    }

    return (
        <Checkbox
            onClick={() => taskModel.toggleTask(taskId)}
            checked={task?.completed}
        />
    )
}
