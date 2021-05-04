import Config from './config';

export const BASE_URL = 'https://picsum.photos';
export const RANDOM_IMAGE = (seed = Date.now(), width = Config.IMAGE_DEFAULT_WIDTH, height = Config.IMAGE_DEFAULT_HEIGHT) =>
    `${BASE_URL}/seed/${seed}/${width}/${height}`;
export const LIST_IMAGES = (page = 0, limit = Config.IMAGES_PAGE_SIZE) =>
    `${BASE_URL}/v2/list?page=${page}&limit=${limit}`;

export default Object.freeze({
    BASE_URL,
    RANDOM_IMAGE,
    LIST_IMAGES,
});
