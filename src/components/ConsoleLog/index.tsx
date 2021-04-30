import React from "react";

import styles from "./styles.module.scss";

import { IConsoleLog } from "../../interfaces";
import ChartTypeStart from "../ChartTypeStart";

export default function ConsoleLog({ index, chart }: IConsoleLog) {
    const {
        type,
        timestamp,
        select,
        group,
        begin,
        end,
        os,
        browser,
        min_response_time,
        max_response_time,
    } = chart;

    return (
        <div className={styles.container}>
            <div className={styles.lineIndex}>
                <p>{index}</p>
            </div>
            <div className={styles.chartData}>
                {type === "start" && (
                    <ChartTypeStart
                        type={type}
                        timestamp={timestamp}
                        select={select}
                        group={group}
                    />
                )}
            </div>
        </div>
    );
}
