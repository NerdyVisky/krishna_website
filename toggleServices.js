const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const contactLink = document.getElementById('contact-link');
const medproLink = document.getElementById('medpro-link');
const roomsLink = document.getElementById('rooms-link');
const galleryLink = document.getElementById('gallery-link');

openMenu.addEventListener('click',show);

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to contact section");
    close();
    setTimeout(() => {
        window.location = contactLink.href;
    }, 500);
});
medproLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to medpro section");
    close();
    setTimeout(() => {
        window.location = medpro.href;
    }, 500);
});
roomsLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to rooms section");
    close();
    setTimeout(() => {
        window.location = roomsLink.href;
    }, 500);
});
galleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("redirected to gallery section");
    close();
    setTimeout(() => {
        window.location = galleryLink.href;
    }, 500);
});


closeMenu.addEventListener('click', close);




function show(){
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-125%';
}