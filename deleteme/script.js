document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    console.log("WEBSITE UP AND RUNNING!")


    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

    ele = document.querySelector('.content');
    try {
        response = await fetch('https://www.android.com')
        text = await response.text();
        console.log(text)
        ele.innerText = text;
    }
    catch (e) {
        console.error(e);
        ele.innerText = e.message;
    }

}
