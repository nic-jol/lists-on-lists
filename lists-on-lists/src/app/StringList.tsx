import { ReactElement, useCallback } from "react";
import styles from "./page.module.css";
import ListItem from "./ListItem";

interface StringListProps {
    items: string[];
    addToList: (event: React.FormEvent<HTMLFormElement>) => void;
    removeItemFromList: (id: string) => void;
}

const StringList = (props: StringListProps): ReactElement => {
    const items = props.items;

    return (
        <>
            <ul>
                {
                    items && !!items.length && items.map((item: string) => {
                        return (
                            <ListItem
                                id={String(new Date().getTime)}
                                item={item}
                                removeItemFromList={props.removeItemFromList}
                            />
                        )
                    })
                }
            </ul>
            <form onSubmit={props.addToList}>
                <label className={styles.newItemInputLabel}>
                    New Item:
                    <input className={styles.newItemInput} type="text" name="newItem" />
                </label>
                <input className={styles.addListItemButton} type="submit" />
            </form>

        </>
    );
}

export default StringList;    