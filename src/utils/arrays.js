export function sortByField(array, field, comparator) {
    if (!array || !Array.isArray(array) || !field || !comparator) {
        return array; // or throw?
    }
    return array.sort((entryA, entryB) => comparator(entryA[field], entryB[field]));
}

export default Object.freeze({
    sortByField,
});
