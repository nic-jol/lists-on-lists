import { useState, ReactElement, useCallback } from "react";
import StringList from "./StringList";
import styles from "./page.module.css";
import { validListItem } from "./listItemValidator";

interface ListWithHeadingProps {
    headingAndItems: { heading: string, items: string[] };
    addItemToList: (heading: string, newItem: string) => boolean;
    removeItemFromList: (heading: string, newItem: string) => void;
    removeList: (listToRemove: string) => void;
}

const ListWithHeading = (props: ListWithHeadingProps): ReactElement => {
    function addToCurrentList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newItem = (event.currentTarget[0] as HTMLInputElement).value;
        const heading = props.headingAndItems.heading;

        const successfullyAdded = props.addItemToList(heading, newItem);

        if (successfullyAdded) {
            (event.currentTarget[0] as HTMLInputElement).value = '';
        }
    }

    function removeFromCurrentList(itemToRemove: string) {
        const heading = props.headingAndItems.heading;
        props.removeItemFromList(heading, itemToRemove);
    }

    const removeListClickHandler = useCallback(() => {
        props.removeList(props.headingAndItems.heading);
    }, [props.headingAndItems, props.removeList]);

    function removeList() {
        //idk
    }

    return <div className={styles.column}>
        <h2 className={styles.listHeading}>{props.headingAndItems.heading}</h2>
        <button onClick={removeListClickHandler} className={styles.removeListButton}>X</button>
        <StringList
            items={props.headingAndItems.items}
            addToList={addToCurrentList}
            removeItemFromList={removeFromCurrentList} />
    </div>;
}

export default ListWithHeading;