import { useEffect } from "react";

import { useStore } from "effector-react";
import { Layout, Row, Col, Typography, Spin, Empty } from "antd";

import { TaskRow, taskModel } from "../../entities/task";
import styles from "./styles.module.scss";
import { ToggleTask } from "../../features/toggle-task";
import { TaskFilters } from "../../features/filter-task";

const TasksListPage = () => {
    const tasks = useStore(taskModel.$tasksList);
    const isLoading = useStore(taskModel.$tasksListLoading);
    const isEmpty = useStore(taskModel.$tasksListEmpty);

    useEffect(() => {
        taskModel.getTasksListFx();
    }, []);

    return (
        <Layout className={styles.content}>
            <Layout.Header className={styles.toolbar}>
                <Row justify="center">
                    <Typography.Title level={1}>Tasks List</Typography.Title>
                </Row>
                <Row justify="center">
                    <TaskFilters />
                </Row>
            </Layout.Header>
            <Layout.Content>
                <Row gutter={[0, 20]} justify="center">
                    {isLoading && <Spin size="large" />}
                    {!isLoading && tasks.map((task) => (
                        <Col key={task.id} span={24}>
                            <TaskRow
                                data={task}
                                titleHref={`/${task.id}`}
                                before={<ToggleTask taskId={task.id} withStatus={false} />}
                            />
                        </Col>
                    ))}
                    {!isLoading && isEmpty && <Empty description="No tasks found" />}
                </Row>
            </Layout.Content>
        </Layout>
    );
};

export default TasksListPage;
