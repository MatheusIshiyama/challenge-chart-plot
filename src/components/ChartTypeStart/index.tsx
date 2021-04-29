import React from "react";

import styles from "./styles.module.scss";

import { IChart } from "../../interfaces";

export default function ChartTypeStart({ type, timestamp, select, group }: IChart) {
    return (
        <>
            <p className={[styles.chartDataField, styles.space].join(" ")}>{"{"}type:</p>
            <p className={styles.chartDataString}>'{type}'</p>
            
            <p className={[styles.chartDataField, styles.space].join(" ")}>, timestamp:</p>
            <p className={styles.chartDataNumber}>{timestamp}</p>
            
            <p className={styles.chartDataField}>, select: [</p>
            {select.map((item, index) => {
                if (index === 0) {
                    return (
                        <p key={index} className={styles.chartDataString}>
                            '{item}'
                        </p>
                    );
                } else {
                    return (
                        <>
                            <p className={[styles.chartDataField, styles.space].join(' ')}>,</p>
                            <p key={index} className={styles.chartDataString}>
                                '{item}'
                            </p>
                        </>
                    );
                }
            })}
            <p className={styles.chartDataField}>], os: [</p>
            {group.map((item, index) => {
                if (index === 0) {
                    return (
                        <p key={index} className={styles.chartDataString}>
                            '{item}'
                        </p>
                    );
                } else {
                    return (
                        <>
                            <p className={styles.chartDataField}>,</p>
                            <p key={index} className={styles.chartDataString}>
                                '{item}'
                            </p>
                        </>
                    );
                }
            })}
            <p className={styles.chartDataField}>]{"}"}</p>
        </>
    );
}
