document.addEventListener('DOMContentLoaded', init, false);

function init() {

}


function download(filename, data) {
    const blob = new Blob([data], { type: 'text/csv' });
    //@ts-ignore
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

function changeFile(e) {
    let files = e.target.files;
    for (let file of files) {
        console.log(file);
        let fr = new FileReader();
        fr.onload = () => {
            let tsv = jsonToTsv(JSON.parse(fr.result));
            download(file.name + '.tsv', tsv);
        }

        fr.readAsText(file);
    }
}

function jsonToTsv(obj) {
    let csv = ['phase', 'propagation', 'correct', 'countryCode', 'responseTime', 'userAnswer'].join('\t') + '\n';
    for (let key of ['test', 'learn']) {
        for (let subsetKey in obj[key]) {
            for (let item of obj[key][subsetKey].history) {
                row = [key, subsetKey == obj.propagationSubsetId, item.correct, item.countryCode, item.responseTime, item.userAnswer];
                csv += row.join('\t') + '\n'
            }
        }
    }
    console.log(csv);
    return csv;
}