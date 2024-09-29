let searchParam = location.search.split('=').pop();

const access_key = 'V3xPokGdxp4QoT4gHxqE7ySseW6TeMdQHKWllEtk4T8';

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=50`

const gallery = document.querySelector('.gallery');
console.log(gallery);  

let allImages;

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        allImages = data;
        makeImages(allImages);
    });
}

const searchImages = () => {
    fetch(search_photo_url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        allImages = data.results;
        makeImages(allImages);
    });
}


const makeImages = (data) => {
    data.forEach((item, index) =>{

        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';

        gallery.appendChild(img);

    })
}

if(searchParam == '') {
    getImages();
} else {
    searchImages();
}
getImages();