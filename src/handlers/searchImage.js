import dom from '../dom.js';
import data from '../data.js';

const searchImage = (value) => {
    data.posters.forEach((poster) => {
        const imgExist = document.getElementById(poster.id);
        if (poster.title.toLowerCase().includes(value.toLowerCase())) {
            if (!imgExist) {
                dom.images.append(poster.dom);
            } else {
                if (imgExist) {
                    imgExist.remove();
                }
            }
            if (dom.images.children.length === 0) {
                dom.messages.innerText = 'No image found with the title';
                dom.images.append(dom.messages);
            }
        }
    });
};

export default searchImage;
