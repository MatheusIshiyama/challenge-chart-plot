import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { ChartData, ChartOptions } from "chart.js";
import { useChart } from "../../contexts";
import { IChartData } from "../../interfaces";

import styles from "./styles.module.scss";

export default function Graphic() {
    const [chartDatasets, setChartDatasets] = useState<IChartData[]>([]);

    const { chartsData } = useChart();

    useEffect(() => {
        setChartDatasets(chartsData);
        console.log(chartsData);
    }, [chartsData]);

    const data: ChartData = {
        labels: ["min response time", "max response time"],
        datasets: chartDatasets,
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
