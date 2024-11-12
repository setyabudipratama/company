const headerSlide = document.querySelector('header .fa-arrow-down');
headerSlide.addEventListener('click', () => {
    const aboutUs = document.getElementById('aboutUs');
    aboutUs.scrollIntoView({ behavior: 'smooth' });
});

const aboutUsSlide = document.querySelector('#aboutUs .fa-arrow-down');
aboutUsSlide.addEventListener('click', () => {
    const business = document.getElementById('business');
    business.scrollIntoView({ behavior: 'smooth' });
});

const businessSlide = document.querySelector('#business .fa-arrow-down');
businessSlide.addEventListener('click', () => {
    const manajement = document.getElementById('manajement');
    manajement.scrollIntoView({ behavior: 'smooth' });
});

const manajementSlide = document.querySelector('#manajement .fa-arrow-down');
manajementSlide.addEventListener('click', () => {
    const news = document.getElementById('news');
    news.scrollIntoView({ behavior: 'smooth' });
});

const newsSlide = document.querySelector('#news .fa-angles-up');
newsSlide.addEventListener('click', () => {
    const header = document.querySelector('header');
    header.scrollIntoView({ behavior: 'smooth' });
});


// aktifkan fitur contact
const contactUs = document.querySelector('.navbar .navbar-collapse .btn');
contactUs.addEventListener('click', () => {
    const WhatsappPesan = encodeURIComponent(`Halo, saya ingin bertanya tentang perusahaan ini`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=6282264244554&text=${WhatsappPesan}`;
    window.open(whatsappLink);
});
contactUs.style.boxShadow = '5px 5px 10px #101010';
contactUs.addEventListener('mouseenter', function () {
    contactUs.style.boxShadow = 'none';
});
contactUs.addEventListener('mouseleave', function () {
    contactUs.style.boxShadow = '5px 5px 10px #101010';
});


// fungsi untuk ke halaman colaborasi
const colaboration = document.querySelector('header .btn');
colaboration.addEventListener('click', () => {
    window.location.href = "colab.html";
});


// cursor navbar contact
const nmrContactUs = document.querySelector('.navbar h5');
nmrContactUs.style.cursor = 'default';


// DOM
const navItem1 = document.querySelector('.nav-item:first-child .nav-link');
navItem1.style.fontWeight = 'normal';
navItem1.addEventListener('mouseenter', function () {
    navItem1.style.textDecoration = 'underline';
    navItem1.style.textDecorationThickness = '3px';
    navItem1.style.textDecorationColor = '#ffffff';
    navItem1.style.textDecorationStyle = 'solid';
});
navItem1.addEventListener('mouseleave', function () {
    navItem1.style.textDecoration = '';
    navItem1.style.textDecorationThickness = '';
    navItem1.style.textDecorationColor = '';
    navItem1.style.textDecorationStyle = '';
});


// rubah navbar
const navItem2 = document.querySelector('.nav-item:nth-child(2) .nav-link');
navItem2.innerHTML = 'About';
navItem2.style.transition = '0.3s ease';
navItem2.addEventListener('click', function() {
    event.preventDefault();
    const aboutUs = document.getElementById('aboutUs');
    aboutUs.scrollIntoView({ behavior: 'smooth' });
});
navItem2.addEventListener('mouseenter', function () {
    navItem2.style.textDecoration = 'underline';
    navItem2.style.textDecorationThickness = '3px';
    navItem2.style.textDecorationColor = '#ffffff';
    navItem2.style.textDecorationStyle = 'solid';
});
navItem2.addEventListener('mouseleave', function () {
    navItem2.style.textDecoration = '';
    navItem2.style.textDecorationThickness = '';
    navItem2.style.textDecorationColor = '';
    navItem2.style.textDecorationStyle = '';
});


// nav item ketiga
// ambil parent
const navbarNav = document.querySelector('.navbar .navbar-nav');
// sibling terakhir
const liTerakhir = document.querySelector('.navbar .nav-item:last-child');
// buat nav item 3
const navItem3 = document.createElement('li');
// masukkan ke parent dan sibling terakhir
navbarNav.insertBefore(navItem3, liTerakhir);
// tambah class
navItem3.setAttribute('class', 'nav-item');
// tag a
const a3 = document.createElement('a');
// buat teks
const text3 = document.createTextNode('Business');
// masukkan teks
a3.appendChild(text3);
// masukkan tag a ke parent
navItem3.appendChild(a3);
// tambah class
a3.setAttribute('class', 'nav-link');
navItem3.style.cursor = 'pointer';
navItem3.style.mixBlendMode = 'difference';
navItem3.style.backgroundBlendMode = 'multiply';
navItem3.style.transition = '0.3s ease';
// fungsi untuk scroll ke business
navItem3.addEventListener('click', () => {
    const business = document.getElementById('business');
    business.scrollIntoView({ behavior: 'smooth' });
});
navItem3.addEventListener('mouseenter', function () {
    navItem3.style.textDecoration = 'underline';
    navItem3.style.textDecorationThickness = '3px';
    navItem3.style.textDecorationColor = '#ffffff';
    navItem3.style.textDecorationStyle = 'solid';
});
navItem3.addEventListener('mouseleave', function () {
    navItem3.style.textDecoration = '';
    navItem3.style.textDecorationThickness = '';
    navItem3.style.textDecorationColor = '';
    navItem3.style.textDecorationStyle = '';
});


// nav item keempat
const navItem4 = document.createElement('li');
// masukkan item ke parent dan sibling terakhir
navbarNav.insertBefore(navItem4, liTerakhir);
// tambah class
navItem4.setAttribute('class', 'nav-item');
// tag a
const a4 = document.createElement('a');
// buat teks
const text4 = document.createTextNode('Manajement');
a4.appendChild(text4);
// masukkan tag a ke parent
navItem4.appendChild(a4);
// tambah kelas
a4.setAttribute('class', 'nav-link');
navItem4.style.cursor = 'pointer';
navItem4.addEventListener('click', () => {
    const manajement = document.getElementById('manajement');
    manajement.scrollIntoView({ behavior: 'smooth' });
});
navItem4.addEventListener('mouseenter', function () {
    navItem4.style.textDecoration = 'underline';
    navItem4.style.textDecorationThickness = '4px';
    navItem4.style.textDecorationColor = '#ffffff';
    navItem4.style.textDecorationStyle = 'solid';
});
navItem4.addEventListener('mouseleave', function () {
    navItem4.style.textDecoration = '';
    navItem4.style.textDecorationThickness = '';
    navItem4.style.textDecorationColor = '';
    navItem4.style.textDecorationStyle = '';
});


// nav item kelima
const navItem5 = document.createElement('li');
// masukkan item ke parent dan sibling terakhir
navbarNav.insertBefore(navItem5, liTerakhir);
// tambah class
navItem5.setAttribute('class', 'nav-item');
// tag a
const a5 = document.createElement('a');
// buat teks
const text5 = document.createTextNode('News');
a5.appendChild(text5);
// masukkan tag a ke parent
navItem5.appendChild(a5);
// tambah kelas
a5.setAttribute('class', 'nav-link');
navItem5.style.cursor = 'pointer';
navItem5.addEventListener('click', () => {
    const news = document.getElementById('news');
    news.scrollIntoView({ behavior: 'smooth' });
});
navItem5.addEventListener('mouseenter', function () {
    navItem5.style.textDecoration = 'underline';
    navItem5.style.textDecorationThickness = '4px';
    navItem5.style.textDecorationColor = '#ffffff';
    navItem5.style.textDecorationStyle = 'solid';
});
navItem5.addEventListener('mouseleave', function () {
    navItem5.style.textDecoration = '';
    navItem5.style.textDecorationThickness = '';
    navItem5.style.textDecorationColor = '';
    navItem5.style.textDecorationStyle = '';
});
