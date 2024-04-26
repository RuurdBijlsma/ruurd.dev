document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    let parsed = (await getHtml())
        .split('<loc>')
        .map(p => p.split('</loc>')[0])
        .filter(url => url.includes('https'))
        .filter(url => !url.includes("portfolio"))
        .sort((a, b) => a - b);

    let html = '';
    for (let url of parsed) {
        let name = url.split('/').filter(n => n);
        name = name[name.length - 1];
        html += `<a target="_blank" href="${url}" class='site'>
            ${name}
        </a>`
    }

    document.querySelector('.sites').innerHTML = html;
}

async function getHtml(site = `https://${location.host}/sitemap.xml`) {
    if (location.href.includes("127"))
        return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://ruurd.dev/automaton/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/ayumu/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/boot/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/brainfuck/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/calculator/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/chat/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/coolecirkel/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/draw/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/emojipicture/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/emojitext/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/exstrata/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/frequencyvisualiser/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/golloop/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/gpubrot/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/hex/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/knightspider/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/knightstour/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/locationestimatr/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/locationhistory/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/mandelbrot/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/map/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/mapgen/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/mastermind/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/notification/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/oldportfolio/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/particles/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/platform/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/pong/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/pool/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/portfolio/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/prolog/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/racegame/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/resizer/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/snake/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/socketcontrol/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/spiderdiagnostics/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/tanks/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/tempmusic/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/test/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/toip/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/torrent/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/videoshare/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/weirdsnake/</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://ruurd.dev/😉/</loc>
            <changefreq>weekly</changefreq>
        </url>
    </urlset>`;
    let response = await fetch(site);
    return await response.text();
}