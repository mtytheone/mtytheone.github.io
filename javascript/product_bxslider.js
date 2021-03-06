// 参考 : http://cly7796.net/wp/javascript/examples-that-use-the-jquery-bxslider/

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
});