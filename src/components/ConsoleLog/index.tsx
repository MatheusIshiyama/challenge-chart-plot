import React from "react";

import styles from "./styles.module.scss";

import { IConsoleLog } from "../../interfaces";

import { ChartTypeStart, ChartTypeSpan, ChartTypeStop, ChartTypeData } from "../ChartTypes";

export default function ConsoleLog({ index, chart }: IConsoleLog) {
    const types = {
        start: <ChartTypeStart {...chart} key={index} />,
        span: <ChartTypeSpan {...chart} key={index} />,
        data: <ChartTypeData {...chart} key={index} />,
        stop: <ChartTypeStop {...chart} key={index} />,
    };

    return (
        <div className={styles.container}>
            <div className={styles.lineIndex}>
                <p>{index}</p>
            </div>
            <div className={styles.chartData}>{types[chart.type]}</div>
        </div>
    );
}
