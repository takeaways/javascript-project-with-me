"use strict"
import {localQuotes} from "./quotes.js"

// let apiQuotes = [];

//Show New Quote
const newQuote = () => {
    //Pick a random quote from apiQuote array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    console.log(quote)
}

//1 get quotes from api
// const getQuotes = async () => {
//     const apiUrl = 'https://type.fit/api/quotes'
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         alert(error.message);
//     }
// }

// On Load

newQuote();