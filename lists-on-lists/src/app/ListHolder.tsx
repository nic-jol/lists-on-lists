import { ReactElement, useCallback } from "react";
import ListWithHeading from "./ListWithHeading";

interface ListHolderProps {
    headings: string[];
    removeList: (listToRemove: string) => void;
}

const ListHolder = (props: ListHolderProps): ReactElement => {
    const headings = props.headings;
    const getKey = useCallback((date:string, id: string) => encodeURI(`${date},${id}`), [])

    return (
        <>
            {
                headings && !!headings.length && headings.map((listHeading: string, index: number) => {
                    return <ListWithHeading 
                        key={getKey(new Date().toUTCString(), String(index))}
                        heading={listHeading}
                        removeList={props.removeList}
                    />;
                })
            }
</>
    );

}

export default ListHolder;