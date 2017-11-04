// 처음 실행되는 함수 time()
$(function() { // 페이지 로드 이후 시작하는 jQuery코드
  // 바깥에 빼 놓은 변하지 않는 것들
  var noon_list = $(".noon");
  var hour_list = $(".hour");
  var min_list = $(".min");

  function time() {
    // color-picker로 변경되는 색
    var bg_color = document.body.style.backgroundColor;
    var color = document.body.style.color;
    // 계속해서 변경되는 시간
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();

    // 시간을 보고 오전/오후를 변경
    noon_list[0].style.color = color;
    if (hour > 12)
      noon_list[1].style.color = bg_color;
    else if (hour < 12)
      noon_list[2].style.color = bg_color;
    else
      $(".noon").css("color", color); //정오에는 오전이기도 하고 오후이기도 함

    // 시를 나타내는 것들의 색을 지정
    $(".hour").css("color", bg_color);
    if (hour > 12)
      hour -= 12;
    $("#hour_시").css("color", color);
    switch (hour) {
      case 1:
        $("#hour_한").css("color", color);
        break;
      case 2:
        $("#hour_두").css("color", color);
        break;
      case 3:
        $("#hour_세").css("color", color);
        break;
      case 4:
        $("#hour_네").css("color", color);
        break;
      case 5:
        $("#hour_다, #hour_섯").css("color", color);
        break;
      case 6:
        $("#hour_여_six, #hour_섯").css("color", color);
        break;
      case 7:
        $("#hour_일, #hour_곱").css("color", color);
        break;
      case 8:
        $("#hour_여, #hour_덟").css("color", color);
        break;
      case 9:
        $("#hour_아, #hour_홉").css("color", color);
        break;
      case 10:
        $("#hour_열").css("color", color);
        break;
      case 11:
        $("#hour_열, #hour_한").css("color", color);
        break;
      case 12:
        $("#hour_열, #hour_두").css("color", color);
        break;
    }

    // 분을 나타내는 것들의 색을 배경색으로 초기화
    $("div[id*=min]").css("color", bg_color);

    // 십분 단위의 분을 나타내는 것들의 색을 지정
    switch (parseInt(min / 10)) {
      case 1:
        $("#tenmin_십").css("color", color);
        break;
      case 2:
        $("#tenmin_이, #tenmin_십").css("color", color);
        break;
      case 3:
        $("#tenmin_삼, #tenmin_십").css("color", color);
        break;
      case 4:
        $("#tenmin_사, #tenmin_십").css("color", color);
        break;
      case 5:
        $("#tenmin_오, #tenmin_십").css("color", color);
        break;
    }

    $("#min_분").css("color", color);
    switch (min % 10) {
      case 1:
        $("#min_일").css("color", color);
        break;
      case 2:
        $("#min_이").css("color", color);
        break;
      case 3:
        $("#min_삼").css("color", color);
        break;
      case 4:
        $("#min_사").css("color", color);
        break;
      case 5:
        $("#min_오").css("color", color);
        break;
      case 6:
        $("#min_육").css("color", color);
        break;
      case 7:
        $("#min_칠").css("color", color);
        break;
      case 8:
        $("#min_팔").css("color", color);
        break;
      case 9:
        $("#min_구").css("color", color);
        break;
    }

    var t = setTimeout(time, 1);
  }
  time();
});
