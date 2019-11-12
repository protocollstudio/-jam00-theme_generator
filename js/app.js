import * as generator from "./generator.js"

window.addEventListener('DOMContentLoaded', function () {
    changeTheme();
})

function changeTheme() {
    let themeContainer = document.getElementById("theme-container")
    let paragraph = document.createElement('p')

    let theme = generator.newTheme()
    paragraph.innerHTML = theme
    themeContainer.appendChild(paragraph)
}
