var iframeScript = document.createElement('script');
iframeScript.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(iframeScript, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {

    player = new YT.Player('player-iframe', {
        height: '390', 
        width: '640',
        videoId: 'TdpBRZ0dZhw',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

function playVideo() {
    player.playVideo();
}

var playing = true;

var videoContainer = document.getElementById('control-container');

videoContainer.addEventListener('click', function() {

    if(playing == true) {

        pauseVideo();
        playing = false;

    } else {

        playVideo();
        playing = true;

    }
});