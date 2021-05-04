export function copyOrEmpty(array = []) {
    return [...array];
}

export function sortByField(array, field, comparator) {
    const copyArray = copyOrEmpty(array);
    if (!field || !comparator) {
        return copyArray; // or throw?
    }
    return copyArray.sort((entryA, entryB) => comparator(entryA[field], entryB[field]));
}

export default Object.freeze({
    copyOrEmpty,
    sortByField,
});
