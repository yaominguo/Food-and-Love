(function(){
    $(document).ready(function(){
        $('body').css({width:$(window).width(),height:$(window).height()});
        var ogg=$('.music')[0].canPlayType('audio/ogg; codecs="vorbis"');//根据canPlayType返回值来判断该浏览器是否支持ogg
        if (ogg=="probably" || ogg=="maybe") {     
            $('.music').attr({src:'voice/Sunny.ogg'}); //支持ogg的话音乐的src就为ogg格式
        }else {
            $('.music').attr({src:'voice/Sunny.mp3'}); //否则为mp3格式
        }
    });
    $('.music_btn').click(function(){
        if($(this).hasClass("play")){
            $(this).css("animation-play-state","paused").removeClass("play");
            $('.music')[0].pause();
        }else{
            $(this).css("animation-play-state","running").addClass("play");
            $('.music')[0].play();
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
        onSlideChangeStart: function(swiper){
            $('.swiper-slide').eq(swiper.activeIndex).addClass("animate").siblings().removeClass("animate");
            var text="来自澳洲的肥牛、北京的烤鸭、哈尔滨的红肠、广州的猪肚包鸡、岭南的排骨焖凤眼、三亚的椰风荔雨、四川的麻辣捞锅、青岛的大虾，料理就是一场原地的旅行，舌尖早已翻山越岭遍地风流！！";
            if(swiper.activeIndex==4){
                $('#text').text("");
                var i=0;
                window.auto=setInterval(function(){
                    if(i>text.length-1){
                        return false;
                    }
                    $('#text').text($('#text').text()+text[i]);
                    i++;
                },100)
            }else{
                clearInterval(window.auto);
            }
        }
    });
})()
