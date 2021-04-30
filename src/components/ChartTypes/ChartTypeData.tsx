import React from "react";

import styles from "./styles.module.scss";

import { IChart } from "../../interfaces";

export default function ChartTypeStart({
    type,
    timestamp,
    os,
    browser,
    min_response_time,
    max_response_time,
}: IChart) {
    return (
        <>
            <p className={[styles.chartDataField, styles.space].join(" ")}>{"{"}type:</p>
            <p className={styles.chartDataString}>'{type}'</p>

            <p className={[styles.chartDataField, styles.space].join(" ")}>, timestamp:</p>
            <p className={styles.chartDataNumber}>{timestamp}</p>

            <p className={[styles.chartDataField, styles.space].join(" ")}>, os:</p>
            <p className={styles.chartDataString}>'{os}'</p>

            <p className={[styles.chartDataField, styles.space].join(" ")}>, browser:</p>
            <p className={styles.chartDataString}>'{browser}'</p>

            <p className={[styles.chartDataField, styles.space].join(" ")}>, min_response_time:</p>
            <p className={styles.chartDataNumber}>{min_response_time}</p>

            <p className={[styles.chartDataField, styles.space].join(" ")}>, max_response_time:</p>
            <p className={styles.chartDataNumber}>{max_response_time}</p>

            <p className={styles.chartDataField}>{"}"}</p>
        </>
    );
}
