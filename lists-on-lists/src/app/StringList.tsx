import { ReactElement } from "react";

interface StringListProps {
    items: string[];
    addToList: () => void
}



const StringList = (props: StringListProps): ReactElement => {
    const items = props.items;
    console.log('items.length' + items.length)
    return (
        <>
            <ul>
                {
                    items && !!items.length && items.map((item: string) => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={props.addToList}>Add Item</button>
        </>
    );
}

export default StringList;    