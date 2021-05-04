export function combineStyles(...styles) {
    return styles.filter((style) => !!style).join(' ');
}

export default Object.freeze({
    combineStyles,
});
