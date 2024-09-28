const access_key = 'V3xPokGdxp4QoT4gHxqE7ySseW6TeMdQHKWllEtk4T8';

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`

const gallery = document.querySelector('.gallery');

let allImages;

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => console.log(data));
}