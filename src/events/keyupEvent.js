import dom from '../dom.js';
import searchImage from '../handlers/searchImage.js';

const keyupEvent = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        searchImage(value);
    });
};
export default keyupEvent;
