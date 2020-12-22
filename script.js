$(document).ready(function(){
  
  // nav div를 hover하면 내가 호버한 그 하위에 있는 .sub만 slideToggle되도록
  $("nav div").hover(function(){
    $(this).find(".sub").stop().slideToggle()
  })
  
})



/*정지 없는 슬라이드 함수식
function 함수이름(매개변수){실행문장}*/
  
// 1. 변수 지정 (이미지갯수, 현재보일이미지위치)
  var imgs = 1
  var now = 0

// 2. 슬라이드 구현 함수식 slide
function slide(){
    now = (now==imgs)? 0:now+=1
  $(".b3img img").eq(now).fadeIn()
  $(".b3img img").eq(now-1).fadeOut()
  }

// 3. 슬라이드 구동 함수식 start
function start(){
  $(".b3img img").eq(0).siblings().fadeOut()
  setInterval(slide,3000)
}

// 4. 함수 호출 ★★★★★★
start()


// 슬라이드
    
    $(document).ready(function(){
        
        $(".slider").bxSlider({
            auto:true
        })
        $(".slider2").bxSlider({
            controls:false
        })
    })
