"use strict"

const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");


let apiQuotes = [];
// Show Loading
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
const complete = ()=> {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//Show New Quote
const newQuote = () => {
    loading();
    //Pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //Check if Author field is black and replace it with 'unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    //Check Quote length to determin styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text;
    complete();
}

//1 get quotes from api
const getQuotes = async () => {
    loading();
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error.message);
    }
}


//Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank',)
}
//Event Listeners
newQuoteBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click',tweetQuote)


// On Load
getQuotes();
