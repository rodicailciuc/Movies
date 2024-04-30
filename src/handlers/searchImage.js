import dom from '../dom.js';
import data from '../data.js';

const searchImage = (value) => {
    data.posters.forEach((poster) => {
        const imageExist = document.getElementById(poster.id);
        if (poster.title.toLowerCase().includes(value.toLowerCase())) {
            if (!imageExist) {
                dom.images.append(poster.dom);
            }
        } else if (imageExist) {
            imageExist.remove();
        }
    });

    if (dom.images.children.length === 0) {
        dom.message.innerText = 'No results found';
        dom.images.append(dom.message);
    } else {
        dom.message.remove();
    }
};

export default searchImage;
