import { ReactElement } from "react";
import ListWithHeading from "./ListWithHeading";

interface ListHolderProps {
    lists: typeof ListWithHeading[];
}

const ListHolder = (props: ListHolderProps): ReactElement => {
    const lists = props.lists;

    return (
        <>
            {
                lists && !!lists.length && lists.map((listHeading: typeof ListWithHeading) => {
                    return ListWithHeading;
                })
            }
        </>
    );

}

export default ListHolder;