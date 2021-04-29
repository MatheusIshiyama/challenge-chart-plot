import { createContext, useContext, useState } from "react";

import { IChart, ChartContextData, ChartContextProviderProps } from "../interfaces";

export const ChartContext = createContext({} as ChartContextData);

export function ChartContextProvider({ children }: ChartContextProviderProps) {
    const [charts, setCharts] = useState<IChart[]>([]);
    const [started, setStarted] = useState<boolean>(false);

    function start({ type, timestamp, group }: IChart): void {
        if (started) return;

        setStarted(true);

        const data: IChart = {
            type,
            timestamp,
            select: ["min_response_time", "min_response_time"],
            group,
        };

        if (charts.length < 1) return setCharts([data]);

        setCharts([...charts, data]);
    }
    
    return <ChartContext.Provider value={{ charts, start }}>{children}</ChartContext.Provider>;
}

export const useChart = () => useContext(ChartContext);
