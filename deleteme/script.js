document.addEventListener('DOMContentLoaded', init, false);

function init() {
    response = await fetch('https://example.com')
    console.log(await response.text())
}
