import { ReactNode } from "react";

export interface IChart {
    type?: "start" | "span" | "data" | "stop";
    timestamp?: number;
    select?: string[];
    group?: string[];
    begin?: number;
    end?: number;
    os?: string;
    browser?: string;
    min_response_time?: number;
    max_response_time?: number;
}

export interface IChartData {
    label: string;
    data: number[];
    backgroundColor: any;
    borderColor: any;
}

export interface IChartDataCount {
    linux_chrome: number;
    linux_firefox: number;
    linux_edge: number;
    mac_chrome: number;
    mac_firefox: number;
    mac_edge: number;
}

export interface ChartContextData {
    charts: IChart[];
    chartsData: IChartData[];
    start: () => void;
    span: (secondsToSpan: number) => void;
    data: ({ os, browser, min_response_time, max_response_time }: IChart) => void;
    stop: () => void;
    clear: () => void;
}

export interface ChartContextProviderProps {
    children: ReactNode;
}
