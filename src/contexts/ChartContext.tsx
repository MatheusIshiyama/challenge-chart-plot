import { createContext, useContext, useEffect, useState } from "react";

import {
    IChart,
    IChartData,
    IChartDataCount,
    ChartContextData,
    ChartContextProviderProps,
} from "../interfaces";

export const ChartContext = createContext({} as ChartContextData);

export function ChartContextProvider({ children }: ChartContextProviderProps) {
    const [charts, setCharts] = useState<IChart[]>([]);
    const [chartsData, setChartsData] = useState<IChartData[]>([]);
    const [chartsDataCount, setChartsDataCount] = useState<IChartDataCount>(null);
    const [plotting, setPlotting] = useState<boolean>(false);
    const [spanEndsAt, setSpanEndsAt] = useState<number>(null);

    useEffect(() => {
        setChartsDataCount({
            linux_chrome: 0,
            linux_edge: 0,
            linux_firefox: 0,
            mac_chrome: 0,
            mac_edge: 0,
            mac_firefox: 0,
        });
    }, []);

    function start(): void {
        if (plotting) return;

        setPlotting(true);

        const data: IChart = {
            type: "start",
            timestamp: Date.now(),
            select: ["min_response_time", "min_response_time"],
            group: ["os", "browser"],
        };

        setCharts([...charts, data]);
    }

    function span(secondsToSpan: number): void {
        if (!plotting || spanEndsAt > Date.now()) return;

        const data: IChart = {
            type: "span",
            timestamp: Date.now(),
            begin: Date.now(),
            end: Date.now() + 1000 * secondsToSpan,
        };

        setSpanEndsAt(data.end);
        setCharts([...charts, data]);
    }

    function data({ os, browser, min_response_time, max_response_time }: IChart): void {
        if (!plotting || spanEndsAt < Date.now()) return;

        const Chart: IChart = {
            type: "data",
            timestamp: Date.now(),
            os,
            browser,
            min_response_time,
            max_response_time,
        };

        setCharts([...charts, Chart]);

        const randomBetween = (min: number, max: number): number =>
            min + Math.floor(Math.random() * (max - min + 1));

        const red: number = randomBetween(0, 255);
        const green: number = randomBetween(0, 255);
        const blue: number = randomBetween(0, 255);

        const rgbColor: string = `rgb(${red}, ${green}, ${blue})`;

        const ChartData: IChartData = {
            label: `data ${chartsData.length + 1}: ${os} ${browser}`,
            data: [min_response_time, max_response_time],
            backgroundColor: rgbColor,
            borderColor: rgbColor,
        };

        setChartsData([...chartsData, ChartData]);
    }

    function stop(): void {
        if (!plotting) return;

        setPlotting(false);
        setSpanEndsAt(null);

        const data: IChart = {
            type: "stop",
            timestamp: Date.now(),
        };

        setCharts([...charts, data]);
    }

    function clear(): void {
        stop();
        setCharts([]);
        setChartsData([]);
    }

    return (
        <ChartContext.Provider value={{ charts, chartsData, start, span, data, stop, clear }}>
            {children}
        </ChartContext.Provider>
    );
}

export const useChart = () => useContext(ChartContext);
