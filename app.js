const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const home = document.querySelector('#home');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.toggle('nav-active');
        home.style.position = 'relative';
        //Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 1
            }s`;
          }
        });
      }
    });
  }

  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    if (nav.classList.contains('nav-active')) {
      home.style.position = 'fixed';
    } else {
      home.style.position = 'relative';
    }

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
  });
};

navSlide();
