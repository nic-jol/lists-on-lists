'use client';

import styles from "./page.module.css";
import { useCallback, useState } from "react";
import ListHolder from "./ListHolder";
import { validListHeading, validListItem } from "./listItemValidator";


export default function Home() {
    const [lists, setLists] = useState<{ heading: string, items: string[] }[]>([{ heading: "Movies", items: ["The Shining", "Mamma Mia", "The Favoriate"] },
    { heading: "Television Shows", items: ["Superstore", "Apple Cider Vinegar"] },
    { heading: "Video Games", items: ["Uncharted", "Journey"] }])
    const [isAddNewListFormVisible, setIsAddNewListFormVisible] = useState(false)

    function removeList(listToRemove: string) {
        setLists(lists.filter(list => list.heading !== listToRemove))
    }

    const showNewListForm = useCallback(() => {
        setIsAddNewListFormVisible(true);
    }, []);

    function addNewList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newListHeading = (event.currentTarget[0] as HTMLInputElement).value;

        const currentHeadings = lists.map(list => list.heading);
        if (!validListHeading(newListHeading, currentHeadings)) {
            alert("List names cannot be blank or be the same as an existing list.")
        } else {
            (event.currentTarget[0] as HTMLInputElement).value = '';
            setLists([...lists, { heading: newListHeading, items: [] }]);
            setIsAddNewListFormVisible(false);
        }
    }

    function addItemToList(heading : string, newItem: string) : boolean {
        const listIndexToAddTo = lists.findIndex(list => list.heading === heading);
        const listToAddTo = lists[listIndexToAddTo];

        const items = listToAddTo.items;
         if (!validListItem(newItem, items)) {
            alert("New item cannot be blank or a duplicate.")
            return false;
        }

        const listWithNewItem = { ...listToAddTo, items: [...listToAddTo.items, newItem] };
        const allListsIncludingOneWithAddedItem = [...lists];
        allListsIncludingOneWithAddedItem[listIndexToAddTo] = listWithNewItem;
        setLists(allListsIncludingOneWithAddedItem);

        return true;
    }
    
    function removeItemFromList(heading: string, itemToRemove: string) {
        const listIndexToRemoveFrom = lists.findIndex(list => list.heading === heading);
        const listToRemoveFrom = lists[listIndexToRemoveFrom];
        const listWithItemRemoved = listToRemoveFrom.items.filter(item => item !== itemToRemove);
        const allListsIncludingOneWithRemoveItem = [...lists];
        allListsIncludingOneWithRemoveItem[listIndexToRemoveFrom] = {heading: heading, items: listWithItemRemoved};
        setLists(allListsIncludingOneWithRemoveItem);
    }

    return (
        <div>
            <div className={styles.pageHeader}>
                <h1>Lists on Lists</h1>
            </div>
            <div>
                {isAddNewListFormVisible ?
                    (<form onSubmit={addNewList} className={styles.newListForm}>
                        <label className={styles.newListLabel}>
                            New List Name:
                            <input className={styles.newListInput} type="text" name="newItem" />
                        </label>
                        <input className={styles.submitListHeadingButton} type="submit" />
                    </form>) :
                    (<button onClick={showNewListForm} className={styles.addListButton}>Add List</button>)}
            </div>
            <div>
                <ListHolder
                    headingsAndItems={lists}
                    addItemToList={addItemToList}
                    removeItemFromList={removeItemFromList}
                    removeList={removeList}
                />
            </div>

        </div>
    );
}
