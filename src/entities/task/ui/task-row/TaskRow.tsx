import { Link } from "react-router-dom";
import cn from "classnames";
import { Row } from "antd";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

export type TaskRowProps = {
    data: any,
    titleHref: string,
    before?: ReactNode,
}

export const TaskRow = ({ data, titleHref }: TaskRowProps) => {
    return (
        <Row className={cn(styles.root, { [styles.completed]: data.completed})}>
            {titleHref ? <Link to={titleHref}>{data.title}</Link> : data.title}
        </Row>
    )
};
