'use client';

import styles from "./page.module.css";
import ListWithHeading from "./ListWithHeading";
import { useState } from "react";


export default function Home() {
    const [lists, setLists] = useState<typeof ListWithHeading[]>([])

    function addNewList() {
        setLists([])
    }


    return (
        <div>
            <div className={styles.pageHeader}>
                <h1>Lists on Lists</h1>

            </div>
            <div>
                <button onClick={addNewList} className={styles.addListButton}>Add List</button>
            </div>
            <div>
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

        </div>
    );
}
