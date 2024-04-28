var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
var sections = document.querySelectorAll('section');
var navlinks = document.querySelectorAll('header .new a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height)
        {
            navlinks.forEach(links => {
                links.classList.remove('active');
            })
            document.querySelector('header nav a[href="#' + id +'"]').classList.add('active');
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
