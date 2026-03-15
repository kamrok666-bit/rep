//-------Меню Бургер---------//
const iconMenu = document.querySelector('.header-menu-icon');
const menuBody = document.querySelector('.header-menu');
const autorization = document.querySelector('.autorization');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        autorization.classList.toggle('_active');
    });
}





const swiper = new Swiper('.swiper', {
  
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.section-4-button__next',
    prevEl: '.section-4-button__prev',
  },
});





/* ------------Аккордион---------------- */

document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        let a = parent.querySelector('.accordion-item__content')


        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            a.style.height = '0px';
        } else {
            document.querySelectorAll('.accordion-item').forEach((child) => {
                child.classList.remove('active')
                child.querySelector('.accordion-item__content').style.height = '0px';
            }
            )
            parent.classList.add('active');
            a.style.height = a.scrollHeight + 'px';

        }
    })
)




/* -----------------Прокрутка при клике------------------------ */
document.querySelector('.about-us').addEventListener('click', function () {
    document.querySelector('.divider').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.services').addEventListener('click', function () {
    document.querySelector('.divider-services').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.contacts').addEventListener('click', function () {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.autorization__entry').addEventListener('click', function () {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.section-1-right__button').addEventListener('click', function () {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});