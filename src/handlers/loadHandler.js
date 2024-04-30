import data from '../data.js';
import dom from '../dom.js';
import createImage from '../components/createImage.js';

const loadHandler = () => {
    data.images.forEach((image) => {
        const movieDom = createImage(image);
        dom.images.append(movieDom);

        data.posters.push({
            id: image.id,
            dom: movieDom,
            title: image.title,
        });
    });
};

export default loadHandler;
