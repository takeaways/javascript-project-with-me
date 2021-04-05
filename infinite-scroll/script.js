const COUNT = 30;
const API_KEY='R0cvzdqvq2c8yQxULHS9l6_ZnuI3HpqHTeHpLV5Ggm4'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${COUNT}`

const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photos = [];


function handleImageLoad(){
    
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready=true;
        loader.hidden = true;
    }
}


// Helper function to set attributes on Dom Element
function setAttribute(element, attribute){
    for(const key in attribute){
        element.setAttribute(key, attribute[key])
    }
}

// create elements for links and Photos, add to dom
function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photos.length;
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
        // Event Listener, check when each is finished
        img.addEventListener('load',handleImageLoad)

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
let currentTimeId;
window.addEventListener('scroll',()=>{
    console.log("->",ready)
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false
        getPhotos();
    }
})

//On Load
getPhotos();