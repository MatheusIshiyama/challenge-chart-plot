import { createContext, useContext, useState } from "react";

import { IChart, ChartContextData, ChartContextProviderProps } from "../interfaces";

export const ChartContext = createContext({} as ChartContextData);

export function ChartContextProvider({ children }: ChartContextProviderProps) {
    const [charts, setCharts] = useState<IChart[]>([]);
    const [plotting, setPlotting] = useState<boolean>(false);
    const [spanEndsAt, setSpanEndsAt] = useState<number>(null);

    function start(): void {
        if (plotting) return;

        setPlotting(true);

        const data: IChart = {
            type: "start",
            timestamp: Date.now(),
            select: ["min_response_time", "min_response_time"],
            group: ["os", "browser"],
        };

        if (charts.length < 1) return setCharts([data]);

        setCharts([...charts, data]);
    }

    function span(): void {
        if (!plotting || spanEndsAt > Date.now()) return;

        const data: IChart = {
            type: "span",
            timestamp: Date.now(),
            begin: Date.now(),
            end: Date.now() + 10000,
        };

        setSpanEndsAt(data.end);
        setCharts([...charts, data]);
    }

    function data(): void {
        if (!plotting || spanEndsAt > Date.now()) return;
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
    }

    return (
        <ChartContext.Provider value={{ charts, start, span, data, stop, clear }}>
            {children}
        </ChartContext.Provider>
    );
}

export const useChart = () => useContext(ChartContext);
