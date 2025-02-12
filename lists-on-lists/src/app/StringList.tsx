import { ReactElement } from "react";

interface StringListProps {
    items: string[];
    addToList: (event: React.FormEvent<HTMLFormElement>) => void
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
            <form onSubmit={props.addToList}>
                <label>
                    New Item:
                    <input type="text" name="newItem" />
                </label>
                <input type="submit" />
            </form>

        </>
    );
}

export default StringList;    