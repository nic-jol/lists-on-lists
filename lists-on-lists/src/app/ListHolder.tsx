import { ReactElement, useCallback } from "react";
import ListWithHeading from "./ListWithHeading";

interface ListHolderProps {
    headingsAndItems: { heading: string, items: string[] }[];
    addItemToList: (heading : string, newItem: string) => boolean;
    removeItemFromList: (heading : string, newItem: string) => void;
    removeList: (listToRemove: string) => void;
}

const ListHolder = (props: ListHolderProps): ReactElement => {
    const headingsAndItems = props.headingsAndItems;
    const getKey = useCallback((date: string, id: string) => encodeURI(`${date},${id}`), [])

    return (
        <>
            {
                headingsAndItems && !!headingsAndItems.length && headingsAndItems.map((headingAndItems: { heading: string, items: string[] }, index: number) => {
                    return <ListWithHeading
                        key={getKey(new Date().toUTCString(), String(index))}
                        headingAndItems={headingAndItems}
                        addItemToList={props.addItemToList}
                        removeItemFromList={props.removeItemFromList}
                        removeList={props.removeList}
                    />;
                })
            }
        </>
    );

}

export default ListHolder;