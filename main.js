
const quoteBox = document.getElementById("quote");
const author = document.getElementById("author");
const tweetBtn = document.getElementById("tweet-Btn");
const quoteBtn = document.getElementById("quote-Btn");

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    quoteBtn.addEventListener('click', function(){
        quoteBox.innerText =`" ${quote.content} "`
        author.innerText = quote.author
})
}

function tweet (){
    window.open(`https://twitter.com/intent/tweet?text=${quoteBox.innerHTML}`, "Tweet Window", "width = 600, height = 300")
}
quoteBtn.addEventListener('click', randomQuote)