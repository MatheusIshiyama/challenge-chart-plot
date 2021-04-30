import React from "react";

import styles from "./styles.module.scss";

import { useChart } from "../../contexts";

import Button from "../Button";

export default function Footer() {
    const { start, span, data, stop, clear } = useChart();

    return (
        <div className={styles.container}>
            <Button title="Start plotting" onClick={start} />
            <Button title="Span time data" onClick={span} />
            <Button title="Create chart data" onClick={data} />
            <Button title="Stop plotting" onClick={stop} />
            <Button title="Clear plots" onClick={clear} />
        </div>
    );
}
