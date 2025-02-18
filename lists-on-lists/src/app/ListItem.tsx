import { ReactElement, useCallback } from "react";
import styles from "./page.module.css";

interface ListItemProps {
    id: string;
    item: string;
    removeItemFromList: (name: string) => void;
}

const ListItem = (props: ListItemProps):ReactElement => {
    const clickHandler = useCallback(() => {
        props.removeItemFromList(props.item);
      }, [props.item, props.removeItemFromList]);

    return (
            <li className={styles.listItem} key={props.id}>{props.item}
                <button className={styles.reorderListItem}>☰</button>
                <button className={styles.removeListItem} onClick={clickHandler}>X</button>
            </li>
    );


}

export default ListItem;