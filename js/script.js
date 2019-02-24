/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Create an array of objects
  Eached object has properties for 'quote', 'source', 'citation', and 'year'
***/

var quotes = [
  {
    quote: "I find your lack of faith disturbing.",
    source: "Darth Vader",
    citation: "A New Hope",
    year: "1977"
  },
  {
    quote:
      "All we have to decide is what to do with the time that is given us.",
    source: "Gandalf",
    citation: "",
    year: ""
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephan King",
    citation: "",
    year: ""
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    source: "Babe Ruth",
    citation: "",
    year: ""
  },
  {
    quote:
      "I see your drinking 1%. Does that mean you think you're fat? Cause you're not. You could be drinking whole if you wanted to.",
    source: "Napoleon Dynamite",
    citation: "Napoleon Dynamite Movie",
    year: "2004"
  }
];

/***
  Get a random quote object from our array
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Print our quote to the DOM 
***/

function printQuote() {
  var randomQuote = getRandomQuote();

  var output = "";
  var outputQuote = "";
  var outputSource = "";

  if (randomQuote.citation == "") {
    outputQuote = '<p class="quote">' + randomQuote.quote + "</p>";
    outputSource = '<p class="source">' + randomQuote.source + "</p>";
    output = outputQuote + " " + outputSource;
    document.querySelector("#quote-box").innerHTML = output;
  } else {
    outputQuote = '<p class="quote">' + randomQuote.quote + "</p>";
    outputSource =
      '<p class="source">' +
      randomQuote.source +
      '<span class="citation">' +
      randomQuote.citation +
      "</span>" +
      '<span class="year">' +
      randomQuote.year +
      "</span></p>";
    output = outputQuote + " " + outputSource;
    document.querySelector("#quote-box").innerHTML = output;
  }
}

/***
  Call the printQuote function when the 'Show another quote' button is pressed
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
