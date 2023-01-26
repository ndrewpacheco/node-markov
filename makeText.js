/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

const argType = process.argv[2];
const inputText = process.argv[3];


async function getUrlText() {
  let resp;
  resp = await axios.get(inputText)
  console.log(resp.data)
}

function getFileText() {

}

 argType === 'url' ? getUrlText() : getFileText()




// $ node makeText.js file eggs.txt
// ... generated text from file 'eggs.txt' ...

// $ node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
// ... generated text from that URL ...