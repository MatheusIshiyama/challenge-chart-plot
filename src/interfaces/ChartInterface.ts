import { ReactNode } from "react";

export interface IChart {
    type: "start" | "span" | "data" | "stop";
    timestamp: number;
    select?: string[];
    group?: string[];
    begin?: number;
    end?: number;
    os?: "linux" | "mac" | "windows";
    browser?: "chrome" | "firefox" | "edge";
    min_response_time?: number;
    max_response_time?: number;
}

export interface ChartContextData {
    charts: IChart[];
    start: ({ group }: IChart) => void;
}

export interface ChartContextProviderProps {
    children: ReactNode;
}
