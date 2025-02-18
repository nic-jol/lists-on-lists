'use client';

import styles from "./page.module.css";
import { useCallback, useState } from "react";
import ListHolder from "./ListHolder";


export default function Home() {
    const [lists, setLists] = useState<string[]>(["Movies", "Television Shows","Video Games"])

    function addNewList(newList: string) {
        setLists([...lists, newList])
    }

    function removeList(listToRemove: string) {
        setLists(lists.filter(listHeading => listHeading !== listToRemove))
    }
    const addNewListClickHandler = useCallback(() => {
        // addNewList(props.item);
      }, []);


    return (
        <div>
            <div className={styles.pageHeader}>
                <h1>Lists on Lists</h1>

            </div>
            <div>
                <button onClick={addNewListClickHandler} className={styles.addListButton}>Add List</button>
            </div>
            <div>
                <ListHolder 
                    headings={lists}
                    removeList = {removeList}
                />

            </div>

        </div>
    );
}
