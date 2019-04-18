//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

let quote = document.querySelector('#text');
let author = document.querySelector('#author');
let tweetQuote = document.querySelector('#tweet-quote');
let tweetPost = document.querySelector('#tweet-post');
let newQuote = document.querySelector('#new-quote');

let colors = ['#27ae60', '#16a085', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857",'#b0cc14'];


let changeColor=()=>{
    document.body.style.background = quote.style.color = author.style.color = tweetQuote.style.background = tweetPost.style.background = newQuote.style.background = colors[Math.floor(Math.random()*(colors.length))];
}

let displayQuote=()=>{
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(data => data.json())
    .then(data => {
        let quoteValue = data.quotes[Math.floor(Math.random()*(data.quotes.length))];
        quote.innerHTML = `<i class="fas fa-quote-left"></i> ${quoteValue.quote}`;
        author.innerHTML = `- ${quoteValue.author}`;
    });
    
    changeColor();
}

newQuote.addEventListener('click',displayQuote);
window.onload = displayQuote();