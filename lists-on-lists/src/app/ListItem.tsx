import { ReactElement, useCallback } from "react";
import styles from "./page.module.css";

interface ListItemProps {
    id: string,
    item: string;
    removeItemFromList: (name: string) => void;
}

const ListItem = (props: ListItemProps):ReactElement => {
    const removeListItemClickHandler = useCallback(() => {
        props.removeItemFromList(props.item);
      }, [props.item, props.removeItemFromList]);

    const getKey = useCallback((date:string, id: string) => encodeURI(`${date},${id}`), [])

    return (
            <li className={styles.listItem} key={getKey(new Date().toUTCString(), props.id)}>{props.item}
                <button className={styles.reorderListItem}>☰</button>
                <button className={styles.removeListItem} onClick={removeListItemClickHandler}>X</button>
            </li>
    );


}

export default ListItem;