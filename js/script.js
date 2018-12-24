/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/


/*** 
quotes array holds quote objects. 
citation , year and tags are optional.
other fields are mandatory.
***/
let quotes = [
{
  quote: "The world won't care about your self-esteem. The world will expect you to accomplish something BEFORE you feel good about yourself.",
  source: "Bill Gates",
  citation: "The Times Magazine",
  year: 1990,
  tags:["Technology"],
  colors: {
    background: "#EEDD82",
    color: "#5F5834"
  }
},
{
  quote:"Social media is not about the exploitation of technology but service to community.",
  source:"Simon Mainwaring",
  citation: "Sydney Morning Harald",
  colors:{
    background: "#7e795c",
    color: "#EEDD82"
  }
},
{
  quote:"We are all now connected by the Internet, like neurons in a giant brain.",
  source:"Stephen Hawking",
  year: 2000,
  tags:["Science"],
  colors:{
    background: "#5f5834",
    color: "#fff"
  }

},
{
  quote:"Science without religion is lame, religion without science is blind.",
  source:"Albert Einstein",
  tags:["Science","Religion"],
  colors:{
    background: "#eedd82",
    color: "#8e844e"
  }

},
{
  quote:"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
  source:"Marie Curie",
  tags:["Science"],
  colors:{
    background: "#97ffff",
    color: "#ff1493"
  }
},
{
  quote:"Be kind whenever possible. It is always possible.",
  source:"Dalai Lama",
  tags:["Religion"],
  colors:{
    background: "#0375B4",
    color: "#FFCE00"
  }
},
{
  quote:"It always seems impossible until it's done.",
  source:"Nelson Mandela",
  tags:["Motivation"],
  colors:{
    background: "#813772",
    color: "#fff"
  }
}
];


let randomNumber=-1;

/***
getRandomQuote function generates a random number between 0 and the length of the quotes array.
It then returns the quoteItem at that index.
It also ensures that next number is not same as previous number
***/
function getRandomQuote(){ 
  let randomNumberNew;
  do{
    randomNumberNew = Math.floor(Math.random() * quotes.length); 
  }while(randomNumberNew===randomNumber);
  randomNumber = randomNumberNew; 
  return quotes[randomNumber];
}


/***
printQuote function gets the new quoteItem from the quotes array and then builds HTML to display inside
the quote-box div.
***/

function printQuote(){
  let quoteItem = getRandomQuote();

  let htmlString = `
        ${getCategory(quoteItem)}
        <p class="quote">“${quoteItem.quote}”</p>
        <p class="source">${quoteItem.source}
          ${getCitation(quoteItem)}
          ${getYear(quoteItem)}
        </p>
        `;

  let quoteBoxDiv = document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = htmlString;
  console.log(quoteItem.quote);

  //set background and text color
  let body = document.querySelector('body');
  body.style.color = quoteItem.colors.color;
  body.style.backgroundColor = quoteItem.colors.background;

  let button = document.getElementById('loadQuote');
  button.style.backgroundColor = quoteItem.colors.color;
  button.style.color = quoteItem.colors.background;

  //listener functions for hover effect
  button.addEventListener('mouseover',function(){
    button.style.color = quoteItem.colors.color;
    button.style.backgroundColor = quoteItem.colors.background;
  });
  button.addEventListener('mouseleave',function(){
    button.style.backgroundColor = quoteItem.colors.color;
    button.style.color = quoteItem.colors.background;
  });
}

//helper function to conditionally get citation 
function getCitation(quoteItem){
  let span="";
  if(quoteItem.citation){
    span = `<span class="citation">${quoteItem.citation}</span>`;
  }
  return span;
}

//helper function to conditionally get year 
function getYear(quoteItem){
  let span="";
  if(quoteItem.year){
    span = `<span class="year">${quoteItem.year}</span>`;
  }
  return span;
}

//helper function to conditionally get category 
function getCategory(quoteItem){
  let p="";
  if(quoteItem.tags){
    p = `<p class="category">${quoteItem.tags}</p>`;
  }
  return p;
}
//function to change quote every 20 seconds.
setInterval(printQuote, 20000);

/***
Click Listener for getting the new quote using printQuote function
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


