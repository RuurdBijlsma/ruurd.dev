document.addEventListener('DOMContentLoaded', init, false);

function init() {
    console.log("WEBSITE UP AND RUNNING!")

    response = await fetch('https://example.com')
    console.log(await response.text())
}
