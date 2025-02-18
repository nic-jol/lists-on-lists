import { ReactElement } from "react";
import ListWithHeading from "./ListWithHeading";

interface ListHolderProps {
    headings: string[];
    removeList: (listToRemove: string) => void;
}

const ListHolder = (props: ListHolderProps): ReactElement => {
    const headings = props.headings;

    return (
        <>
            {
                headings && !!headings.length && headings.map((listHeading: string) => {
                    return <ListWithHeading 
                        heading={listHeading}
                        removeList={props.removeList}
                    />;
                })
            }
</>
    );

}

export default ListHolder;