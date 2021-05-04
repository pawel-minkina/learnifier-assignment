import {isProduction} from './envs';

// for github pages this is required due to usage of HashRouter for this particular production environment
export function localLink(path) {
    return isProduction()
        ? `${process.env.PUBLIC_URL}/#/${path.startsWith('/') ? path.substr(1) : path}`
        : path;
}

export default Object.freeze({
    localLink,
});
