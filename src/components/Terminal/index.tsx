import React, { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import styles from "./styles.module.scss";

import { useChart } from "../../contexts/ChartContext";
import TerminalLine from "./TerminalLine";

export default function Terminal() {
    const [height, setHeight] = useState(200);
    const [previousY, setPreviousY] = useState(300);
    const [resizing, setResizing] = useState(false);

    const { charts } = useChart();

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
    }, [resizing]);

    function onMouseDown(event: ReactMouseEvent) {
        setPreviousY(event.clientY);
        setResizing(true);
    }

    function mouseMove(event: MouseEvent) {
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

    function mouseUp() {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", mouseUp);
        setResizing(false);
    }

    return (
        <div style={{ height }} className={styles.container}>
            <div className={styles.content}>
                <Scrollbars style={{ width: "100%" }}>
                    {charts &&
                        charts.map((chart, index) => (
                            <TerminalLine index={index + 1} chart={chart} key={index} />
                        ))}
                </Scrollbars>
            </div>
            <div
                style={{ top: height + 72.5 }}
                onMouseDown={(event) => onMouseDown(event)}
                className={styles.buttonResizer}
            >
                <div className={styles.buttonResizerShape} />
            </div>
        </div>
    );
}
