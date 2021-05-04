export function isDevelopment() {
    return process.env?.NODE_ENV === 'development';
}

export function isProduction() {
    return !isDevelopment();
}

export default Object.freeze({
    isDevelopment,
    isProduction,
});
