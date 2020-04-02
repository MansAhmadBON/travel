window.onload = function () {
    const D = document;
    const Body = D.querySelector('body');
    const btnPlayVideo = D.querySelector('.play-video');
    const VideosContent = D.querySelector('.Videos-content');
    const VideosPoster = D.querySelector('.Videos__poster');
    const headerDesktop = D.querySelector('.header-page--desktop');
    const headerMobile = D.querySelector('.header-page--mobile');
    const headerMobileContent = D.querySelector('.wrapper-header--mobile-active');
    const headerMobileBtn = D.querySelector('.header-mobile__btn');

    headerMobileBtn.addEventListener('click', function () {
        headerMobileContent.classList.add('header-mobile--show');
        headerMobile.classList.add('header-page--mobile-hide');
    });

    D.querySelector('.wrapper-header--mobile-active').addEventListener('click', function (e) {
        if(e.target.className === 'wrapper-header--mobile-active header-mobile--show') {
            headerMobileContent.classList.remove('header-mobile--show');
            headerMobile.classList.remove('header-page--mobile-hide');
        }
    });


    btnPlayVideo.addEventListener('click', function () {
        VideosContent.classList.add('Videos-content--active');
        VideosPoster.classList.add('Videos__poster-hide');
    });

    D.addEventListener('scroll', onScroll);

    function onScroll(event){
        const currentPosition = window.scrollY;
        const sectionsPage = D.querySelectorAll('.section-page');
        const links = D.querySelectorAll('.header-page__list a');

        if(currentPosition >= 80){
            headerDesktop.classList.add('header-page--scrolling');
            headerMobile.classList.add('header-page--scrolling');

        } else {
            headerDesktop.classList.remove('header-page--scrolling');
            headerMobile.classList.remove('header-page--scrolling');
        }

        sectionsPage.forEach(section => {

            if(section.offsetTop - 100 <= currentPosition && (section.offsetTop + section.offsetHeight) > currentPosition){
                links.forEach(a => {
                    a.classList.remove('header-page__link--active');

                    if(section.getAttribute('id') === a.getAttribute('href').substring(1)){
                        a.classList.add('header-page__link--active');
                    }

                })
            }
        });
    }


};

