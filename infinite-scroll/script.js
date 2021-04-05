

const COUNT = 10;
const API_KEY='398B3FjqrfVRNjY9RXHtQc01OClP2lvja9GzMiUOlk0'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${COUNT}`

const imageContainer = document.querySelector("#image-container");


// Helper function to set attributes on Dom Element
function setAttribute(element, attribute){
    for(const key in attribute){
        element.setAttribute(key, attribute[key])
    }
}

// create elements for links and Photos, add to dom
function displayPhotos(){
    const template = document.createDocumentFragment();
    photos.forEach(photo => {
        const item = document.createElement('a');
        const img = document.createElement('img');

        setAttribute(item, {
            href:photo.links.html,
            target:'_blank'
        })
        
        setAttribute(img, {
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })

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

//check to see if scrolling near bottom of page, laod more photos
window.addEventListener('scroll',()=>{
    console.log('scrolled')
})

//On Load
getPhotos();