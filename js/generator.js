import * as config from "./configuration.js"

export {
    newTheme
};

function loadRandomWord(listPath) {
    return config.loadFile(listPath)
        .then((wordList) => {
            let index = Math.round(Math.random() * (wordList.length - 1));
            return wordList[index]
        })
}

function newTheme() {
    return Promise.all([loadRandomWord(config.Path.VERB), loadRandomWord(config.Path.NOUN), loadRandomWord(config.Path.ADJECTIVE)])
        .then((([randomVerb, randomNoun, randomAdjective]) => {
            return {
                "verb" : randomVerb,
                "noun" : randomNoun,
                "adjective" : randomAdjective,
            }
        }))
        .catch((error) => {
            console.log(error)
        })
}
