import React from "react";

import styles from "./styles.module.scss";

interface IButton {
    title: string;
    onClick: () => void;
}

export default function Button({ title, onClick }: IButton) {
    return (
        <div onClick={onClick} className={styles.container}>
            <p>{title}</p>
        </div>
    );
}
