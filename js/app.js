import * as generator from "./generator.js"

window.addEventListener('DOMContentLoaded', function () {
    changeTheme()
})

async function changeTheme() {
    
    let themeContainer = document.getElementById("theme-container")
    let paragraph = document.createElement('p')
    let theme = await generator.newTheme()
    
    paragraph.innerHTML =  `<h2> ${theme.verb} ${theme.adjective} ${theme.noun} </h2>`
    themeContainer.appendChild(paragraph)

}