import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import { ChartData, ChartOptions } from "chart.js";
import { useChart } from "../../contexts";

import styles from "./styles.module.scss";

export default function Graphic() {
    const [chartDatasets, setChartDatasets] = useState(null);

    const { charts } = useChart();

    const data: ChartData = {
        labels: ["min response time", "max response time"],
        datasets: [
            {
                label: "linux chrome",
                data: [0.1, 1.2],
                backgroundColor: "blue",
                borderColor: "blue",
            },
            {
                label: "linux firefox",
                data: [0.2, 1.4],
                backgroundColor: "red",
                borderColor: "red",
            },
            {
                label: "mac chrome",
                data: [0.5, 1.7],
                backgroundColor: "green",
                borderColor: "green",
            },
        ],
    };

    const options: ChartOptions = {
        maintainAspectRatio: false,
    };

    return (
        <div className={styles.container}>
            <Line type data={data} height={600} options={options} />
        </div>
    );
}
