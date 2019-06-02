document.addEventListener('DOMContentLoaded', () => {
    map = new WorldMap(cleanInput(input));
});

function cleanInput(input) {
    let values = [];
    for (let key in input) {
        let val = input[key];
        values.push(val);
    }

    let paletteScale = getPallete(values),
        data = {};

    for (let key in input) {
        let val = input[key],
            isoKey = getCountryISO(key);

            if (!data[isoKey])
                data[isoKey] = {
                    numberOfThings: 0,
                    fillColor: paletteScale(0)
                }
        data[isoKey].numberOfThings += val;
        data[isoKey].fillColor = paletteScale(val + data[isoKey].numberOfThings);
    }
    return data;
}

function getPallete(values, lowColor = '#DDDDFF', highColor = '#02386f') {
    let minValue = Math.min.apply(null, values),
        maxValue = Math.max.apply(null, values),
        palette = d3.scale.linear()
        .domain([minValue, maxValue])
        .range([lowColor, highColor]);
    return palette;
}
