/**
 * Create a movie element
 *
 * @param {Object} movie - movie object
 *      @property {number} movie.id - movie id
 *      @property {string} movie.title - movie title
 *      @property {string} movie.image - movie poster image url
 *
 * @returns {HTMLElement} movie element
 */

const createImage = (image) => {
    const container = document.createElement('div');
    container.classList.add('image-box');
    container.id = image.id;

    // create title
    const title = document.createElement('h2');
    title.innerText = image.title;

    // create image
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    // append title and image to container
    container.append(title, img);

    return container;
};

export default createImage;
