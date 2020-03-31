window.onload = function () {
    const D = document;
    const Body = D.querySelector('body');
    const btnPlayVideo = D.querySelector('.play-video');
    const VideosContent = D.querySelector('.Videos-content');
    const VideosPoster = D.querySelector('.Videos__poster');
    const headerDesktop = D.querySelector('.header-page--desktop');

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
        } else {
            headerDesktop.classList.remove('header-page--scrolling');
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

