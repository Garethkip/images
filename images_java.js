var images = ['321113-anime-model-4k-wallpaper-pemandangan-anime-pemandangan.jpg', '467407-cool-4k-desktop-wallpaper-top-free-cool-4k-desktop-background.jpg', '467410-free-download-cool-4k-wallpaper-top-cool-4k-background-4000x4000-for-your-desktop-mobile-tablet-explore-wallpaper-cool-cool-background-cool-wallpaper-cool-wallpaper.jpg', '467412-free-download-cool-space-wallpaper-desktop-background-1920x1080-for-your-desktop-mobile-tablet-explore-cool-4k-wallpaper-8k-hd-wallpaper-4k-video-game-wallpaper-ultra-hd-wallpaper-1080p.jpg', '467418-4k-wallpaper-for-mobile-1920x1080-music-wallpaper-watercolor-wallpaper-iphone-4k-wallpaper-for-mobile.jpg', '467433-cool-4k-wallapapers.jpg'];
var num = 0;

function next() {
    var image = document.getElementById('img');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    image.src = images[num];
}

function prev() {
    var image = document.getElementById('img');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    image.src = images[num];
}