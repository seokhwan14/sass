$(function(){
  // console.log($("body"));
  // console.log(window.location.href)
  // console.log($(location).attr("href"))
  /*
  실습:
  #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  해당 메뉴에 on class 추가하시오.
  */
  function splitLocation(el){
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href;
  }

  // let currentHref = $(location).attr("href").split("/");
  // currentHref = currentHref[currentHref.length-1].split(".");
  // currentHref = currentHref[0];
  // console.log(currentHref);
  let currentHref = splitLocation($(location));


  $("#lnb a").each(function(){
    // let matchHref = $(this).attr("href").split("/");
    // matchHref = matchHref[matchHref.length-1].split(".");
    // matchHref = matchHref[0];
    if( splitLocation($(this)) == currentHref ){
      $(this).addClass("on");
    }
  });

  /*
  실습:
  location href split 코드에서 공통부분을 함수화 하시오.
  */

  /*script 영역 아코디언 UI 인터렉션 만들기 예제1*/
  $(".accordion dd:not(:first)").css({
    "display":"none",
    "height": 0
  })
  $(".accordion dl dt").click(function(){
    let thisElem = $(this);
    if($("+dd",thisElem).css("display") == "none"){
      let isAni = $("dd").is(":animated");
      if( !isAni ){
        $(".accordion dd").each(function(){
          if( parseInt($(this).css("height")) == 300 ){
            $(this).animate({ height: 0 },300,function(){
              $(this).css("display","none");
            });
          }
        });
        $("+dd",thisElem).css("display","block").animate({ height: 300 },400);
      }
    }
  });

});
