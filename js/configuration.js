
const Path = {
    VERB : "assets/verbs_list.txt",
    NOUN : "assets/nouns_list.txt",
    ADJECTIVE : "assets/adjectives_list.txt",
}

function loadFile(listPath) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.response.replace(/\n$/, "").split("\n"))
            } else if (xhr.status != 0 && xhr.status != 200) {
                reject(xhr);
            }
        }
        xhr.open("GET", listPath, true)
        xhr.send()
    })
}

export {
    loadFile,
    Path
}