import React, { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import styles from "./styles.module.scss";

import { useChart } from "../../contexts";
import ConsoleLog from "../ConsoleLog";

export default function Console() {
    const [height, setHeight] = useState(200);
    const [previousY, setPreviousY] = useState(300);
    const [resizing, setResizing] = useState(false);

    const { charts } = useChart();

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }, [resizing]);

    function handleMouseDown(event: ReactMouseEvent) {
        setPreviousY(event.clientY);
        setResizing(true);
    }

    function handleMouseMove(event: MouseEvent) {
        if (resizing) {
            const finalHeight = height - (previousY - event.clientY);
            if (finalHeight < 50) {
                setHeight(50);
            } else if (finalHeight > 300) {
                setHeight(300);
            } else {
                setHeight(finalHeight);
            }
        }
    }

    function handleMouseUp() {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        setResizing(false);
    }

    return (
        <div style={{ height }} className={styles.container}>
            <div className={styles.content}>
                <Scrollbars style={{ width: "100%" }}>
                    {charts &&
                        charts.map((chart, index) => (
                            <ConsoleLog index={index + 1} chart={chart} key={index} />
                        ))}
                </Scrollbars>
            </div>
            <div
                style={{ top: height + 72.5 }}
                onMouseDown={(event) => handleMouseDown(event)}
                className={styles.buttonResizer}
            >
                <div className={styles.buttonResizerShape} />
            </div>
        </div>
    );
}
