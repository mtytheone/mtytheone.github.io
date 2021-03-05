// 参考 : http://cly7796.net/wp/javascript/examples-that-use-the-jquery-bxslider/

// APIの埋め込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var slider;
var ytPlayer = [];
var ytData = [];
// プレーヤーのサイズ
var ytWidth = 560;
var ytHeight = 315;

// APIの準備完了後
var ytReady = false;
function onYouTubeIframeAPIReady() {
    ytReady = true;
}

// youtubeの埋め込み
function youtubeSet() {
    for (var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player(ytData[i]['area'], {
            width: ytWidth,
            height: ytHeight,
            videoId: ytData[i]['id']
        });
    }
}

$(function () {
    slider = $('.bxslider').bxSlider({
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            // videp
            const videos = $slideElement.parent().find('video');
            videos.each(function (index, element) {
                $(element).get(0).pause();
            });
        }
    });

    // youtubeを埋め込むスライドを取得
    $('[data-youtubeid]').each(function (e) {
        $(this).append('<div id="bx-yt' + e + '"></div>')
        ytData[e] = {
            id: $(this).attr('data-youtubeid'),
            area: 'bx-yt' + e
        };
    });

    // APIの準備ができているか確認
    function ytCheck() {
        if (ytReady) {
            // youtube埋め込みの実行
            youtubeSet();
        } else {
            setTimeout(ytCheck, 200);
        }
    }
    ytCheck();
});