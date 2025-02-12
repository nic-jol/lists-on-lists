import { ReactElement } from "react";
import styles from "./page.module.css";

interface StringListProps {
    items: string[];
    addToList: (event: React.FormEvent<HTMLFormElement>) => void
}



const StringList = (props: StringListProps): ReactElement => {
    const items = props.items;

    return (
        <>
            <ul>
                {
                    items && !!items.length && items.map((item: string) => {
                        return (
                            <li className={styles.listItem} key={item}>{item}
                            <button className={styles.reorderListItem}>☰</button>
                                <button className={styles.removeListItem}>X</button>
                            </li>
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