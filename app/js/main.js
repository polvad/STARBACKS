new WOW().init();

const menuBtn = document.querySelector('.header__btn');
const menuList = document.querySelector('.header__list');
const menuLink = menuList.querySelectorAll('.header__link');
const accordionBtn = document.querySelectorAll('.footer__title');

menuBtn.addEventListener('click', menuOpen);

function menuOpen() {
  menuList.classList.toggle('active');
  this.classList.toggle('active');
  menuLink.forEach(item => {
    item.onclick = () => {
      menuList.classList.remove('active');
      this.classList.toggle('active');
    }
  })
}

accordionBtn.forEach(e => {
  e.addEventListener('click', openTab);
});

function openTab() {
  this.classList.toggle('active')

  if (parseInt(this.nextElementSibling.style.height) > 0) {
    this.nextElementSibling.style.height = 0
  } else {
    this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px'
  }

}


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
