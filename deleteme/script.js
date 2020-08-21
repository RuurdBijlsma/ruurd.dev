document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    console.log("WEBSITE UP AND RUNNING!")

    ele = document.querySelector('.content');
    try{
        response = await fetch('https://example.com', {mode: 'cors'})
        text = await response.text();
        console.log(text)
        ele.innerText(text);
    }
    catch(e){
        console.error(e);
        ele.innerText(e.message);
    }

}
