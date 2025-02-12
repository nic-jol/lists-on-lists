'use client';

import styles from "./page.module.css";
import ListWithHeading from "./ListWithHeading";


export default function Home() {
    return (
        <div>
            <div className={styles.pageHeader}>
                <h1>Lists on Lists</h1>
            </div>
            <ListWithHeading
                heading='Movies'
            />
            <ListWithHeading
                heading='Television Shows'
            />
            <ListWithHeading
                heading='Video Games'
            />
        </div>
    );
}
