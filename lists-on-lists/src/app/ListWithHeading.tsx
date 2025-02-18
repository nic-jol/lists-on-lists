import { useState, ReactElement } from "react";
import StringList from "./StringList";
import styles from "./page.module.css";
import validListItem from "./listItemValidator";

interface ListWithHeadingProps {
    heading: string;
}


const ListWithHeading = (props: ListWithHeadingProps): ReactElement => {
    const [items, setItems] = useState<string[]>([])

    function addToItemList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newItem = (event.currentTarget[0] as HTMLInputElement).value;

        const itemInListAlready = items.find(item => item === newItem);
        if (validListItem(newItem, items)) {
            (event.currentTarget[0] as HTMLInputElement).value = '';
            setItems([...items, newItem])
        } else if (itemInListAlready) {
            alert("Cannot add duplicate items to a list.")
        }
    }

    function removeItemFromList(itemToRemove: string) {
        setItems(items.filter(item => item !== itemToRemove));
    }

    function removeList() {
        //idk
    }

    return <div className={styles.column}>
        <h2 className={styles.listHeading}>{props.heading}</h2>
        <button onClick={removeList} className={styles.removeListButton}>X</button>
        <StringList
            items={items}
            addToList={addToItemList} 
            removeItemFromList={removeItemFromList}/>
    </div>;
}

export default ListWithHeading;