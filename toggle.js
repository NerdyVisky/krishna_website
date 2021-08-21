const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const servicesLink = document.getElementById('services-link');
const teamsLink = document.getElementById('teams-link');
const contactLink = document.getElementById('contact-link');




openMenu.addEventListener('click',show);
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to home section");
    close();
    setTimeout(() => {
        window.location = homeLink.href;
    }, 500);
});
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to about section");
    close();
    setTimeout(() => {
        window.location = aboutLink.href;
    }, 500);
});
servicesLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to services section");
    close();
    setTimeout(() => {
        window.location = servicesLink.href;
    }, 500);
});
teamsLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to teams section");
    close();
    setTimeout(() => {
        window.location = teamsLink.href;
    }, 500);
});
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to contact section");
    close();
    setTimeout(() => {
        window.location = contactLink.href;
    }, 500);
});

closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-125%';
}

