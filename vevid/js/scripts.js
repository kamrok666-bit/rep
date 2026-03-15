const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,

    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});
const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    loop: true,
    slidesPerView: 18,
    spaceBetween: 5,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    speed: 5000,

});
const swiper3 = new Swiper('.mySwiper3', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});







window.onload = function () {
    let block = document.querySelectorAll('.section-5__item')
    let btn = document.querySelector('.section-5__button')
    for (let i = 8; i < block.length; i++) {
        block[i].classList.toggle('act');

    }
    btn.addEventListener('click', function () {
        for (let i = 8; i < block.length; i++) {
            block[i].classList.toggle('act');

        }
        /* block.classList.toggle('act'); */
    })
}



/* --------------Form---------------- */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    
    async function formSend(e) {
        e.preventDefault();
        
        let error = formValidate(form);
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++
                }
            }else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++
                }
            }
            
        }
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    return
})



/* -----------------Прокрутка при клике------------------------ */
document.querySelector('.about-us').addEventListener('click', function () {
    document.querySelector('.section-2').scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.popular-products').addEventListener('click', function () {
    document.querySelector('.section-3').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.catalog').addEventListener('click', function () {
    document.querySelector('.section-5').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.header-button').addEventListener('click', function () {
    document.querySelector('.section-7').scrollIntoView({ behavior: 'smooth' });
});