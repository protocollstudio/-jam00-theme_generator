import * as generator from "./generator.js"

window.addEventListener('DOMContentLoaded', function () {
    changeTheme()
})

function changeTheme() {
    
    generator.newTheme().then((theme) => {
        let themeContainer = document.getElementById("theme-container")
        let paragraph = document.createElement('p')
        paragraph.innerHTML =  `<h2> ${theme.verb} ${theme.adjective} ${theme.noun} </h2>`
        themeContainer.appendChild(paragraph)
    })

}