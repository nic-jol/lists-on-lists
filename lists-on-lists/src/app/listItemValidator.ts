function validListItem(newItem: string, currentItems: string[]) {
    const newItemIsNotNullOrEmpty = newItem && newItem.trim().length;
    const itemInListAlready = currentItems.find(item => item === newItem);

    return newItemIsNotNullOrEmpty && !itemInListAlready;

}

export default validListItem;