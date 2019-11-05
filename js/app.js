import * as generator from "./generator.js"

window.addEventListener('DOMContentLoaded', function () {

    changeTheme();

})


function changeTheme() {
    let themeContainer = document.getElementById("theme-container")
    let paragraph = document.createElement('p')

    paragraph.innerHTML = "pouet pouet les amis"
    themeContainer.appendChild(paragraph)
}
