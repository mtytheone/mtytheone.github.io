$(function(){
    var width=$(window).width();
    if(width<640){
        $("#webgl-frame-notime").html('<div style="width:560px;height:315px;"><iframe frameborder="0" height="100%" src="https://vrchive.com/e/rgni/r0p0?play_btn=1" width="100%" style="height: 100%; margin: 0 auto; padding: 0 0 0 0; width: 100%;" allowfullscreen="true"></iframe></div>');
        $("#webgl-frame-urp").html('<img src="./video/thmb/URP.PNG"></image><br></br>');
        $("spongetunnel").html('<video src="video/SpongeTunnel.mp4" poster="video/thmb/SpongeTunnel.png" controls playsinline></video><br>');
        $("clocktunnel").html('<video src="video/Clock Tunnel.mp4" poster="video/thmb/Clock Tunnel.png" controls playsinline></video><br>');
        $("mutualworld").html('<video src="video/Mutual World.mp4" poster="video/thmb/Mutual World.png" controls playsinline></video><br>');
        $("circlenotcylinder").html('<video src="video/Circle NOT Cylinder.mp4" poster="video/thmb/Circle NOT Cylinder.png" controls playsinline></video><br>');
        $("darknessmodule").html('<video src="video/Darkness module.mp4" poster="video/thmb/Darkness module.png" controls playsinline></video><br>');
    }
})