// 動画の読み込みが完了したらカバーを削除
document.addEventListener('DOMContentLoaded', function () {
    const videoelement = document.getElementById('bg-video');
    const cover = document.getElementById('front_cover');
    videoelement.addEventListener('canplay', function () {
        cover.remove();
    }, false);
}, false);