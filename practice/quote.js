// Create an array of at least 5 quotes (strings).
// When the “New Quote” button is clicked:
// Use Math.random() to pick a random quote.
// Display that quote in the <p> element.
// Bonus: Change the background color randomly each time a new quote appears.

// I will need to get elements
// create the array of quotes
// create function to show quote
// - pick random from quotes
// - 
// Event Listener

const displayQuote = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");

const quotes = [
  "This is temporary quote one",
  "This is temporary quote two",
  "This is temporary quote three",
  "This is temporary quote four",
  "This is temporary quote five",
];

function showRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
  displayQuote.textContent = quotes[random];
}

quoteBtn.addEventListener("click", showRandomQuote);