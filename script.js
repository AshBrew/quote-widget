// Array of quotes (you can add more quotes to this list)
const quotes = [
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien",
    { text: "Even the smallest person can change the course of the future.", author: "J.R.R. Tolkien",
    { text: "There is some good in this world, Mr. Frodo, and it's worth fighting for.", author: "J.R.R. Tolkien",
    { text: "The road goes ever on and on.", author: "J.R.R. Tolkien",
    { text: "All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien"
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
