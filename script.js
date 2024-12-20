// Array of quotes (you can add more quotes to this list)
const quotes = [
    "Not all those who wander are lost. - J.R.R. Tolkien",
    "Even the smallest person can change the course of the future. - J.R.R. Tolkien",
    "There is some good in this world, Mr. Frodo, and it's worth fighting for. - J.R.R. Tolkien",
    "The road goes ever on and on. - J.R.R. Tolkien",
    "All we have to decide is what to do with the time that is given us. - J.R.R. Tolkien"
];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display the random quote when the page loads
document.getElementById("quote-text").innerText = getRandomQuote();

// Add event listener to the button to get a new quote when clicked
document.getElementById("new-quote").addEventListener("click", function() {
    document.getElementById("quote-text").innerText = getRandomQuote();
});
