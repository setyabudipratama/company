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
