import * as config from "./configuration.js";

function loadRandomWord(listPath) {
  return config.loadFile(listPath).then(wordList => {
    let index = Math.round(Math.random() * (wordList.length - 1));
    return wordList[index];
  });
}

async function newTheme() {
  let [randomVerb, randomNoun, randomAdjective] = await Promise.all([
    loadRandomWord(config.Path.VERB),
    loadRandomWord(config.Path.NOUN),
    loadRandomWord(config.Path.ADJECTIVE)
  ]).catch(error => {
    console.log(error);
    return
  });

  return {
    verb: randomVerb,
    noun: randomNoun,
    adjective: randomAdjective
  };
}

export { 
  newTheme
};