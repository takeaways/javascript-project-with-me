const button = document.querySelector("#button");
const audioElement = document.querySelector("audio");

const toggleButton = () => {
    button.disabled = !button.disabled;
}

const getJokesFromApi = async () => {
    const jokeApiUrl ="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    let joke =""
    try {
        toggleButton();
        const response = await fetch(jokeApiUrl);
        const data = await response.json();
        if(data.setup){
            joke = `${data.setup} ... ${data.delivery}`;
        }else{
            joke = data.joke;
        }
        tellMe(joke)
    } catch (error) {
        alert(error.message)
    }
}

function tellMe(joke){
    VoiceRSS.speech({
        key: 'bf4bb9c8e1eb4eea8a5bc618489affa3',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

//Event Listener
button.addEventListener('click', getJokesFromApi);
audioElement.onended = ()=>{
    toggleButton();
}
