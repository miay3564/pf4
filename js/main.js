$(function(){
    //스크롤 이벤트가 일어나면 할 일
    //만약에 현재 스크롤 높이가 100보다 크면
    //.bestArt에 클래스 animate를 추가해라.
   $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $('.bestArt').addClass('animate');
      }
      if($(this).scrollTop() > 1200){
        $('.mdPick').addClass('animate');
      }
      if($(this).scrollTop() > 2300){
        $('.newArt').addClass('animate');
      }
      if($(this).scrollTop() > 4000){
        $('.review').addClass('animate');
      }
   }); 
});    