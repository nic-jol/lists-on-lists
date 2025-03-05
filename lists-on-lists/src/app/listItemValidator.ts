export function validListHeading(newHeading: string, currentHeadings: string[] ) {
    const newItemIsNotNullOrEmpty = newHeading && newHeading.trim().length;
    const itemInListAlready = currentHeadings.find(heading => heading === newHeading);

    return newItemIsNotNullOrEmpty && !itemInListAlready;

}

export function validListItem(newItem: string, currentItems: string[]) {
    const newItemIsNotNullOrEmpty = newItem && newItem.trim().length;
    const itemInListAlready = currentItems.find(item => item === newItem);

    return newItemIsNotNullOrEmpty && !itemInListAlready;

}
