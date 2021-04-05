

const COUNT = 10;
const API_KEY='398B3FjqrfVRNjY9RXHtQc01OClP2lvja9GzMiUOlk0'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${COUNT}`

const imageContainer = document.querySelector("#image-container");


// create elements for links and Photos, add to dom
function displayPhotos(){
    const template = document.createDocumentFragment();
    photos.forEach(photo => {
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);

        item.appendChild(img)
        template.appendChild(item)
    });
    imageContainer.appendChild(template)
}


async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photos = await response.json();
        displayPhotos();
    } catch (error) {
        alert(error)
    }
}

//On Load
getPhotos();