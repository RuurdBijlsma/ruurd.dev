init();

function init() {
    document.addEventListener('DOMContentLoaded', () => setTheme(localStorage.theme === undefined || localStorage.theme === 'dark'));

    let language = 'dutch';
    let textSet = false;
    let projectsSet = false;
    fetch(`portfolio/languages/${language}/projects.json`).then(j => j.json().then(projects => {
        if (textSet) {
            projectsSet = true;
            setProjectsHTML(projects);
        } else {
            projectsSet = projects;
        }
    }));
    fetch(`portfolio/languages/${language}/text.json`).then(j => j.json().then(text => {
        setTextContent(text);
        textSet = true;
        if (projectsSet !== true)
            setProjectsHTML(projectsSet)
    }));
}

function setTextContent(content) {
    textContent = content
    let projectTexts = document.getElementsByClassName('projects-text'),
        websitesTexts = document.getElementsByClassName('websites-text'),
        portfolioText = document.getElementsByClassName('portfolio-text'),
        socialText = document.getElementsByClassName('social-text'),
        contactText = document.getElementsByClassName('contact-text'),
        phoneText = document.getElementsByClassName('phone-text'),
        mailText = document.getElementsByClassName('mail-text'),
        meText = document.getElementsByClassName('me-text'),
        messageText = document.getElementsByClassName('message-text');
    for (let text of projectTexts)
        text.innerText = textContent.projects;
    for (let text of websitesTexts)
        text.innerText = textContent.websites;
    for (let text of portfolioText)
        text.innerText = textContent.portfolio;
    for (let text of socialText)
        text.innerText = textContent.social;
    for (let text of contactText)
        text.innerText = textContent.contact;
    for (let text of phoneText)
        text.innerText = textContent.phone;
    for (let text of mailText)
        text.innerText = textContent.mail;
    for (let text of messageText)
        text.innerText = textContent.message;
    for (let text of meText)
        text.innerHTML = `<p>${textContent.me.join("</p><p>")}</p>`;

    messagePlaceholderText = document.getElementsByClassName('message-placeholder-text');
    senderPlaceholderText = document.getElementsByClassName('sender-placeholder-text');
    for (let text of messagePlaceholderText)
        text.setAttribute('placeholder', textContent.messagePlaceholder);
    for (let text of senderPlaceholderText)
        text.setAttribute('placeholder', textContent.senderPlaceholder);
}

function handleSubmit(e) {
    e.preventDefault();
    sendMail();
}

function sendMail() {
    let from = document.getElementById('sender-email').value,
        message = document.getElementById('message').value,
        contactElement = document.getElementById('contact-form');
    to = 'ruurd@bijlsma.dev';

    if (from != '' && message != '') {
        request('POST', 'portfolio/mail.php', { msg: message, to: to, from: from }).then(function (response) {
            console.log(response);
            if (response.includes('php'))
                contactElement.innerHTML = `<div id='done'>Error</div>`;
            else if (response.includes('fail'))
                alert(textContent.requestLimit);
            else
                contactElement.innerHTML = `<div id='done'>${textContent.mailConfirmation[0]} ${to} ${textContent.mailConfirmation[1]}</div>`;
        });
    }
}

function request(type, url, data = {}) {
    return new Promise(function (resolve) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4)
                resolve(this.responseText);
        };
        let requestParams = [];
        for (let prop in data) {
            requestParams.push(prop + '=' + data[prop]);
        }
        requestParams = requestParams.join('&');
        xhttp.open(type, url, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(requestParams);
    })
}

function setProjectsHTML(projects) {
    let projectsElement = document.getElementById('project-section'),
        websitesElement = document.getElementById('website-section'),
        projectsHTML = `<h3>${textContent.projects}</h3>`,
        websitesHTML = `<h3>${textContent.websites}</h3>`;
    for (let website of projects.websites) {
        let linksHTML = '',
            tagsHTML = '';
        for (let link in website.links)
            linksHTML += `<a href='${website.links[link]}' target="_blank" rel="noopener noreferrer">${link}</a>`;
        for (let tag of website.tags)
            tagsHTML += `<div class='project-tag'>${tag}</div>`;

        websitesHTML += `<div class='project'>
                            <div class='project-info'>
                                <h3>${website.title}</h3>
                                <div class='project-tags'>
                                    ${tagsHTML}
                                </div>
                                <p>${website.description}</p>
                                <div class='project-links'>
                                    ${linksHTML}
                                </div>
                            </div>
                            <div class='project-image' style="background-image: url(portfolio/img/projects/${website.image});"></div>
                        </div>`;
    }
    for (let project of projects.projects) {
        let linksHTML = '',
            tagsHTML = '';
        for (let link in project.links)
            linksHTML += `<a href='${project.links[link]}' target="_blank" rel="noopener noreferrer">${link}</a>`;
        for (let tag of project.tags)
            tagsHTML += `<div class='project-tag'>${tag}</div>`;

        projectsHTML += `<div class='project'>
                            <div class='project-info'>
                                <h3>${project.title}</h3>
                                <div class='project-tags'>
                                    ${tagsHTML}
                                </div>
                                <p>${project.description}</p>
                                <div class='project-links'>
                                    ${linksHTML}
                                </div>
                            </div>
                            <div class='project-image' style="background-image: url(portfolio/img/projects/${project.image});"></div>
                        </div>`;
    }

    websitesElement.innerHTML = websitesHTML;
    projectsElement.innerHTML = projectsHTML;
}

function changeTheme(e) {
    setTheme(e.target.checked);
}

function setTheme(dark) {
    let themeSwitch = document.querySelector('.dark-theme-switch input');
    if (dark) {
        themeSwitch.checked = true;
        localStorage.theme = 'dark';

        document.documentElement.style.setProperty('--primary-color', '#158633');
        document.documentElement.style.setProperty('--background-color', 'rgb(36, 36, 36)');
        document.documentElement.style.setProperty('--text-on-primary', 'white');
        document.documentElement.style.setProperty('--text-on-background', 'rgba(255, 255, 255, 0.6)');
        document.documentElement.style.setProperty('--contact-background', '#191919');
        document.documentElement.style.setProperty('--text-on-contact-background', 'white');
        document.documentElement.style.setProperty('--icon-on-contact-background', 'rgba(0,0,0,0.7)');
        document.documentElement.style.setProperty('--project-background', 'rgb(17, 17, 17)');
        document.documentElement.style.setProperty('--text-on-project-background', 'rgba(255, 255, 255, 0.75)');
        document.documentElement.style.setProperty('--switch-color', 'rgba(255, 255, 255, 0.89)');
    } else {
        themeSwitch.checked = false;
        localStorage.theme = 'light';

        document.documentElement.style.setProperty('--primary-color', '#22c095');
        document.documentElement.style.setProperty('--background-color', '#eee');
        document.documentElement.style.setProperty('--text-on-primary', 'white');
        document.documentElement.style.setProperty('--text-on-background', 'rgba(0, 0, 0, 0.6)');
        document.documentElement.style.setProperty('--contact-background', '#333333;');
        document.documentElement.style.setProperty('--text-on-contact-background', 'white');
        document.documentElement.style.setProperty('--icon-on-contact-background', 'rgba(0,0,0,0.7)');
        document.documentElement.style.setProperty('--project-background', 'white');
        document.documentElement.style.setProperty('--text-on-project-background', 'rgba(0,0,0,0.75)');
        document.documentElement.style.setProperty('--switch-color', 'rgba(0,0,0,0.9)');
    }
}