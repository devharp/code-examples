const winkNLP = require('wink-nlp');
const its = require('wink-nlp/src/its');
const as = require('wink-nlp/src/as');
const model = require('wink-eng-lite-web-model');
const nlp = winkNLP(model);

const text = 'Hello how are you?';

const doc = nlp.readDoc(text);

console.log(doc);
console.log(doc.sentences().out());