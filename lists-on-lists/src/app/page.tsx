'use client';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    function ListItem() {
        return (
            <>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </>
        )
    }

  return (
    <div>
        <div className={styles.pageHeader}>
            <h1>Lists on Lists</h1>
        </div>
        <div className={styles.column}>
            <h2>Movies</h2>
            <ListItem />
        </div>
        <div className={styles.column}>
            <h2>Television</h2>
            <ListItem />
        </div>
        <div className={styles.column}>
            <h2>Video Games</h2>
            <ListItem />
        </div>
    </div>
  );
}
