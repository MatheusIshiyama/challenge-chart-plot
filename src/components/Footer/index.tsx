import React, { ChangeEvent, useState } from "react";

import styles from "./styles.module.scss";

import { useChart } from "../../contexts";
import { IChart } from "../../interfaces";

import Button from "../Button";

export default function Footer() {
    const [secondsToSpan, setSecondsToSpan] = useState<string>(undefined);
    const [os, setOs] = useState<string>(undefined);
    const [browser, setBrowser] = useState<string>(undefined);
    const [minResponse, setMinResponse] = useState<string>(undefined);
    const [maxResponse, setMaxResponse] = useState<string>(undefined);

    const { start, span, data, stop, clear } = useChart();

    function handleSpan() {
        if (!secondsToSpan) return;

        span(Number(secondsToSpan));

        setSecondsToSpan("");
    }

    function handleData() {
        if (!os || !browser || !minResponse || !maxResponse) return;

        const chartData: IChart = {
            os,
            browser,
            min_response_time: Number(minResponse),
            max_response_time: Number(maxResponse),
        };

        data(chartData);

        setOs("");
        setBrowser("");
        setMinResponse("");
        setMaxResponse("");
    }

    function handleChangeSeconds(event: ChangeEvent<HTMLInputElement>) {
        if (Number(event.target.value) < 0) return;
        setSecondsToSpan(event.target.value);
    }

    function handleChangeOs(event: ChangeEvent<HTMLSelectElement>) {
        setOs(event.target.value);
    }

    function handleChangeBrowser(event: ChangeEvent<HTMLSelectElement>) {
        setBrowser(event.target.value);
    }

    function handleChangeMinResponse(event: ChangeEvent<HTMLInputElement>) {
        if (Number(event.target.value) < 0) return;
        setMinResponse(event.target.value);
    }

    function handleChangeMaxResponse(event: ChangeEvent<HTMLInputElement>) {
        if (Number(event.target.value) < 0) return;
        setMaxResponse(event.target.value);
    }

    return (
        <div className={styles.container}>
            <Button title="Start plotting" onClick={start} />
            <div>
                <Button title="Span time data" onClick={handleSpan} />
                <input
                    type="number"
                    placeholder="seconds to span data"
                    onChange={handleChangeSeconds}
                    value={secondsToSpan}
                />
            </div>
            <div>
                <Button title="Create chart data" onClick={handleData} />
                <select name="os" defaultValue="" value={os} id="os" onChange={handleChangeOs}>
                    <option value="" disabled>
                        Select OS
                    </option>
                    <option value="linux">linux</option>
                    <option value="mac">mac</option>
                </select>
                <select
                    name="browser"
                    defaultValue=""
                    value={browser}
                    id="browser"
                    onChange={handleChangeBrowser}
                >
                    <option value="" disabled>
                        Select navigator
                    </option>
                    <option value="chrome">chrome</option>
                    <option value="firefox">firefox</option>
                    <option value="edge">edge</option>
                </select>

                <input
                    type="number"
                    placeholder="min response time"
                    onChange={handleChangeMinResponse}
                    value={minResponse}
                    className={styles.responseInput}
                />
                <input
                    type="number"
                    placeholder="max response time"
                    onChange={handleChangeMaxResponse}
                    value={maxResponse}
                    className={styles.responseInput}
                />
            </div>
            <Button title="Stop plotting" onClick={stop} />
            <Button title="Clear data & plots" onClick={clear} />
        </div>
    );
}
