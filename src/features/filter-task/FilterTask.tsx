import { useStore } from "effector-react";
import { Radio } from "antd";

import { taskModel } from "../../entities/task";
import { filtersList, getFilterById, DEFAULT_FILTER } from "./config";
import { $taskDetailsLoading } from "../../entities/task/model";

export const TaskFilters = () => {
    const isLoading = useStore($taskDetailsLoading);

    return (
        <Radio.Group defaultValue={DEFAULT_FILTER} buttonStyle="solid">
            {
                filtersList.map(({title, id}: any) => (
                    <Radio.Button
                        key={id}
                        onClick={() => taskModel.setQueryConfig(getFilterById(id).config)}
                        value={id}
                        disabled={isLoading}
                    >
                        {title}
                    </Radio.Button>
                ))
            }
        </Radio.Group>
    );
}
