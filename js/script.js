//array of quotes
let quotes = [
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    source: "Dorothy",
    citation: "The Wizard of Oz",
    year: 1939,
    tags: "movies"
  },
  {
    quote: "May the Force be with you.",
    source: "Yoda",
    citation: "Star Wars",
    year: 1977,
    tags: "movies"
  },
  {
    quote: "E.T. phone home.",
    source: "E.T.",
    citation: "E.T. The Extra-Terrestrial",
    year: 1982,
    tags: "movies"
  },
  {
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes",
    citation: "The Adventures of Sherlock Holmes",
    year: 1929,
    tags: "movies"
  },
  {
    quote: "I'm king of the world!",
    source: "Jack",
    citation: "Titanic",
    year: 1997,
    tags: "movies"
  },
  {
    quote: "Begin now to be what you will be hereafter.",
    source: "Saint Jerome",
    tags: "inspirational"
  },
  {
    quote: "We have to do the best we are capable of. This is our sacred human responsibility.",
    source: "Albert Einstein",
    tags: "inspirational"
  },
  {
    quote: "It is not in the stars to hold our destiny but in ourselves.",
    source: "William Shakespeare",
    tags: "inspirational"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
    tags: "programming, linux"
  },
  {
    quote: "They don't make bugs like Bunny anymore.",
    source: "Olav Mjelde",
    tags: "programming"
  },
  {
    quote: "Good design adds value faster than it adds cost.",
    source: "Thomas C. Gale",
    tags: "programming"
  },
  {
    quote: "Have no fear of perfection — you’ll never reach it.",
    source: "Salvador Dali",
    year: 1961,
    tags: "design, art"
  },
  {
    quote: "Creativity is nothing but a mind set free.",
    source: "Torrie T. Asai",
    year: 2015,
    tags: "design, art"
  },
  {
    quote: "Art is anything you can get away with.",
    source: "Marshal McLuhan",
    year: 2005,
    tags: "design, art"
  },
]

//array of background gradients
let gradients = [
  ['#003973', '#e5e5be'],
  ['#348f50', '#56b4d3'],
  ['#ff6e7f', '#bfe9ff'],
  ['#314755', '#26a0da'],
  ['#2b5876', '#4e4376'],
  ['#00467f', '#a5cc82'],
  ['#536976', '#bbd2c5'],
  ['#9796f0', '#fbc7d4'],
  ['#1f4037', '#99f2c8'],
  ['#c31432', '#240b36'],
  ['#654ea3', '#eaafc8'],
  ['#ff4b1f', '#ff9068']
];


//getRandomQuote function
function getRandomQuote(){
  let randNum = Math.floor (Math.random() * quotes.length );
  return quotes[randNum];
}

//set 20 seconds interval to run printQuote function
var quoteTimer = setInterval( printQuote, 20000 );

//Print Quote Function
function printQuote(){
  //restart quoteTimer
  clearInterval(quoteTimer);
  quoteTimer = setInterval( printQuote, 20000 );

  //get a random quote
  let theQuote = getRandomQuote();

  //change the quote
  let quoteContainer = document.querySelector('.quote');
  quoteContainer.textContent = theQuote['quote'];

  //change the source
  let sourceContainer = document.querySelector('.source');
  let sourceString = `${theQuote['source']}`;

  //check and add citation
  if (theQuote.hasOwnProperty('citation')){
    sourceString += `<span class="citation">${theQuote['citation']}</span>`
  }

  //check and add year
  if (theQuote.hasOwnProperty('year')){
    sourceString += `<span class="year">${theQuote['year']}</span>`
  }

  //check and add tags
  if (theQuote.hasOwnProperty('tags')){
    sourceString += `<span class="tags">${theQuote['tags']}</span>`
  }

  sourceContainer.innerHTML = sourceString;
  changeBackground();
}

//change background Function
function changeBackground(){
  let gradNum = Math.floor( Math.random() * gradients.length );

  //change the body color
  let body = document.querySelector('body');
  body.style.background = `linear-gradient( 120deg, ${gradients[gradNum][0]} , ${gradients[gradNum][1]} )`;

  //change the button color
  let reload = document.querySelector('#loadQuote');
  reload.style.backgroundColor = `${gradients[gradNum][0]}`;
}


//Don't change the following (provided with starter files)
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
