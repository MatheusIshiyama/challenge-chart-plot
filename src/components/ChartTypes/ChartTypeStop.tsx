import React from "react";

import styles from "./styles.module.scss";

import { IChart } from "../../interfaces";

export default function ChartTypeStop({ type, timestamp }: IChart) {
    return (
        <>
            <p className={[styles.chartDataField, styles.space].join(" ")}>{"{"}type:</p>
            <p className={styles.chartDataString}>'{type}'</p>

            <p className={[styles.chartDataField, styles.space].join(" ")}>, timestamp:</p>
            <p className={styles.chartDataNumber}>{timestamp}</p>

            <p className={styles.chartDataField}>{"}"}</p>
        </>
    );
}
