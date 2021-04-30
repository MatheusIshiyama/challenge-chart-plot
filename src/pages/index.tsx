import React from "react";

import styles from '../styles/styles.module.scss';

import { Header, Console, Graphic, Footer } from "../components";

export default function Index() {
    return (
        <div className={styles.container}>
            <Header />
            <Console />
            <Graphic />
            <Footer />
        </div>
    );
}
