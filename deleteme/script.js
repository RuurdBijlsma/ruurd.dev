document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    console.log("WEBSITE UP AND RUNNING!")

    try{
        response = await fetch('https://example.com', {mode: 'cors'})
        text = await response.text();
        console.log(text)
        document.write(text);
    }
    catch(e){
        console.error(e);
        document.write(e.message);
    }

}
