window.onload = function () {
    const btnPlayVideo = document.querySelector('.play-video');
    const VideosContent = document.querySelector('.Videos-content');
    const VideosPoster = document.querySelector('.Videos__poster');


    btnPlayVideo.addEventListener('click', function () {
        VideosContent.classList.add('Videos-content--active');
        VideosPoster.classList.add('Videos__poster-hide');
    });

};

