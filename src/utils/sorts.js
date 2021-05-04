export function stringCompare(stringA = '', stringB = '') {
    return stringA.localeCompare(stringB);
}

export function numberCompare(numberA = 0, numberB = 0) {
    return numberA - numberB;
}

export default Object.freeze({
    stringCompare,
    numberCompare,
});
