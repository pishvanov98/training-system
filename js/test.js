$('.single-item').slick({
    infinite: false,
    dots: false,
    draggable:false,
    arrows:true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  var id_tem = document.cookie;
  var id_tem = id_tem.split('♠')[0];
  var id_tem = id_tem.split('').reverse().join('') ;// сделали реверс
  var id_tem = id_tem.split('♣')[0];

function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut
  );
}

function init2() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut2
  );
}

function init3() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut3
  );
}

function init4() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut4
  );
}

function init5() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut5
  );
}

function init6() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut6
  );
}

function init7() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut7
  );
}

function init8() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut8
  );
}

function init9() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut9
  );
}

function init10() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut10
  );
}

function init11() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut11
  );
}

function init12() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut12
  );
}

function testOut(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">1/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test1}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer1}</p>`;
                out +=`<p class="correct_answer">${data.correct_answer1}</p>`;
                out +=`<p id="not_correct_answer1">${data.not_correct_answer1}</p>`;
                out +=`<p id="not_correct2_answer1">${data.not_correct2_answer1}</p>`;
            out +='</div>';
            out +='</div>';
        out +='</div>';
        $('.test-out-g').html(out);
      }
      else{
        
            window.location.href = 'main.php';
        
      }
}

function testOut2(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">2/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test2}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer2}</p>`;
             out +=`<p id="not_correct_answer2">${data.not_correct_answer2}</p>`;
             out +=`<p class="correct_answer">${data.correct_answer2}</p>`;
                out +=`<p id="not_correct2_answer2">${data.not_correct2_answer2}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g2').html(out);
      }
      else{
          $('.test-out-g2').html('Такой темы не существует');
      }
}

function testOut3(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">3/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test3}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer3}</p>`;
             out +=`<p id="not_correct_answer3">${data.not_correct_answer3}</p>`;
             out +=`<p class="correct_answer">${data.correct_answer3}</p>`;
             out +=`<p id="not_correct2_answer3">${data.not_correct2_answer3}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g3').html(out);
      }
      else{
          $('.test-out-g3').html('Такой темы не существует');
      }
}

function testOut4(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">4/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test4}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer4}</p>`;
                out +=`<p class="correct_answer">${data.correct_answer4}</p>`;
                out +=`<p id="not_correct_answer4">${data.not_correct_answer4}</p>`;
                out +=`<p id="not_correct2_answer4">${data.not_correct2_answer4}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g4').html(out);
      }
      else{
          $('.test-out-g4').html('Такой темы не существует');
      }
}

function testOut5(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">5/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test5}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer5}</p>`;
                out +=`<p class="correct_answer">${data.correct_answer5}</p>`;
                out +=`<p id="not_correct_answer5">${data.not_correct_answer5}</p>`;
                out +=`<p id="not_correct2_answer5">${data.not_correct2_answer5}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g5').html(out);
      }
      else{
          $('.test-out-g5').html('Такой темы не существует');
      }
}

function testOut6(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">6/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test6}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer6}</p>`;
             out +=`<p id="not_correct_answer6">${data.not_correct_answer6}</p>`;
             out +=`<p id="not_correct2_answer6">${data.not_correct2_answer6}</p>`;
             out +=`<p class="correct_answer">${data.correct_answer6}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g6').html(out);
      }
      else{
          $('.test-out-g6').html('Такой темы не существует');
      }
}

function testOut7(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">7/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test7}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer7}</p>`;
                out +=`<p class="correct_answer">${data.correct_answer7}</p>`;
                out +=`<p id="not_correct_answer7">${data.not_correct_answer7}</p>`;
                out +=`<p id="not_correct2_answer7">${data.not_correct2_answer7}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g7').html(out);
      }
      else{
          $('.test-out-g7').html('Такой темы не существует');
      }
}

function testOut8(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">8/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test8}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer8}</p>`;
             out +=`<p id="not_correct_answer8">${data.not_correct_answer8}</p>`;
             out +=`<p class="correct_answer">${data.correct_answer8}</p>`;
                out +=`<p id="not_correct2_answer8">${data.not_correct2_answer8}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g8').html(out);
      }
      else{
          $('.test-out-g8').html('Такой темы не существует');
      }
}

function testOut9(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">9/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test9}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer9}</p>`;
                out +=`<p class="correct_answer">${data.correct_answer9}</p>`;
                out +=`<p id="not_correct_answer9">${data.not_correct_answer9}</p>`;
                out +=`<p id="not_correct2_answer9">${data.not_correct2_answer9}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g9').html(out);
      }
      else{
          $('.test-out-g9').html('Такой темы не существует');
      }
}

function testOut10(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests">';

            out +='<div class="border_test">';
             out +=`<p class="num1">10/10</p>`;
             out +=` <p class="num">?</p>`;
             out +=`<p class="condition_test">${data.condition_test10}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer10}</p>`;
                out +=`<p class="correct_answer">${data.correct_answer10}</p>`;
                out +=`<p id="not_correct_answer10">${data.not_correct_answer10}</p>`;
                out +=`<p id="not_correct2_answer10">${data.not_correct2_answer10}</p>`;
            out +='</div>';
            out +='</div>';
            out +='</div>';
        $('.test-out-g10').html(out);
      }
      else{
          $('.test-out-g10').html('Такой темы не существует');
      }
}

function testOut11(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        out +=`<p class="tema_2">${data.tema}</p>`;
        $('.test-out-g11').html(out);
      }
      else{
          $('.test-out-g11').html('Такой темы не существует');
      }
}

function testOut12(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        out +=` <div class="button_test">`;
        out +=`      <a href="tem.php#${id_tem}"  class="exit_test">ВЫХОД<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"><a href="tem.php#${id_tem}" class="exit_test2">Прогресс сохранится</a></a>`;
        out +=`   </div>`;
        $('.test-out-g12').html(out);
      }
      else{
          $('.test-out-g12').html('Такой темы не существует');
      }
}

function destroyblock(){
    document.getElementById("not_correct_answer1").style.display = "none";
    document.getElementById("not_correct2_answer1").style.display = "none";
    document.getElementById("not_correct_answer_1_1").style.display = "none";
    document.getElementById("not_correct_answer_2_1").style.display = "none";
}

function destroyblock2(){
    document.getElementById("not_correct_answer2").style.display = "none";
    document.getElementById("not_correct2_answer2").style.display = "none";
    document.getElementById("correct_answer_2").style.top = "536px";
    document.getElementById("not_correct_answer_1_2").style.display = "none";
    document.getElementById("not_correct_answer_2_2").style.display = "none";
}

function destroyblock3(){
    document.getElementById("not_correct_answer3").style.display = "none";
    document.getElementById("not_correct2_answer3").style.display = "none";
    document.getElementById("correct_answer_3").style.top = "536px";
    document.getElementById("not_correct_answer_1_3").style.display = "none";
    document.getElementById("not_correct_answer_2_3").style.display = "none";
}

function destroyblock4(){
    document.getElementById("not_correct_answer4").style.display = "none";
    document.getElementById("not_correct2_answer4").style.display = "none";
    document.getElementById("not_correct_answer_1_4").style.display = "none";
    document.getElementById("not_correct_answer_2_4").style.display = "none";
}

function destroyblock5(){
    document.getElementById("not_correct_answer5").style.display = "none";
    document.getElementById("not_correct2_answer5").style.display = "none";
    document.getElementById("not_correct_answer_1_5").style.display = "none";
    document.getElementById("not_correct_answer_2_5").style.display = "none";
}

function destroyblock6(){
    document.getElementById("not_correct_answer6").style.display = "none";
    document.getElementById("not_correct2_answer6").style.display = "none";
    document.getElementById("correct_answer_6").style.top = "536px";
    document.getElementById("not_correct_answer_1_6").style.display = "none";
    document.getElementById("not_correct_answer_2_6").style.display = "none";
}

function destroyblock7(){
    document.getElementById("not_correct_answer7").style.display = "none";
    document.getElementById("not_correct2_answer7").style.display = "none";
    document.getElementById("not_correct_answer_1_7").style.display = "none";
    document.getElementById("not_correct_answer_2_7").style.display = "none";
}

function destroyblock8(){
    document.getElementById("not_correct_answer8").style.display = "none";
    document.getElementById("not_correct2_answer8").style.display = "none";
    document.getElementById("correct_answer_8").style.top = "536px";
    document.getElementById("not_correct_answer_1_8").style.display = "none";
    document.getElementById("not_correct_answer_2_8").style.display = "none";
}

function destroyblock9(){
    document.getElementById("not_correct_answer9").style.display = "none";
    document.getElementById("not_correct2_answer9").style.display = "none";
    document.getElementById("correct_answer_9").style.top = "536px";
    document.getElementById("not_correct_answer_1_9").style.display = "none";
    document.getElementById("not_correct_answer_2_9").style.display = "none";
}

function destroyblock10(){
    document.getElementById("not_correct_answer10").style.display = "none";
    document.getElementById("not_correct2_answer10").style.display = "none";
    document.getElementById("not_correct_answer_1_10").style.display = "none";
    document.getElementById("not_correct_answer_2_10").style.display = "none";
}

function clickplus1(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test1'
        },
    );
      $('.slick-next').click();
    
}
function clickplus2(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test2'
        },
    );
    $('.slick-next').click();
}
function clickplus3(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test3'
        },
    );
    $('.slick-next').click();
}
function clickplus4(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test4'
        },
    );
    $('.slick-next').click();
}
function clickplus5(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test5'
        },
    );
    $('.slick-next').click();
}
function clickplus6(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test6'
        },
    );
    $('.slick-next').click();
}
function clickplus7(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test7'
        },
    );
    $('.slick-next').click();
}
function clickplus8(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test8'
        },
    );
    $('.slick-next').click();
}
function clickplus9(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test9'
        },
    );
    $('.slick-next').click();
    document.getElementById("white_wraper").style.display = "none";
}
function clickplus10(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_user",
            "tema" : tem,
            "name_block" : 'condition_test10'
        },
    );
    setTimeout(function(){
        window.location.href = 'resultest.php';
    }, 500);
}

function clickminus1(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test1'
        },
    );
      $('.slick-next').click();
    
}
function clickminus2(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test2'
        },
    );
    $('.slick-next').click();
}
function clickminus3(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test3'
        },
    );
    $('.slick-next').click();
}
function clickminus4(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test4'
        },
    );
    $('.slick-next').click();
}
function clickminus5(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test5'
        },
    );
    $('.slick-next').click();
}
function clickminus6(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test6'
        },
    );
    $('.slick-next').click();
}
function clickminus7(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test7'
        },
    );
    $('.slick-next').click();
}
function clickminus8(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test8'
        },
    );
    $('.slick-next').click();
}
function clickminus9(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test9'
        },
    );
    $('.slick-next').click();
    document.getElementById("white_wraper").style.display = "none";
}
function clickminus10(){
    var tem = document.cookie;
    var tem = tem.split('○')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    var tem = tem.split('•')[0];
    var tem = tem.split('').reverse().join('') ;// сделали реверс
    $.post(
        "core.php",
        {
            "action" : "updateTems_userminus",
            "tema" : tem,
            "name_block" : 'condition_test10'
        },
    );
    setTimeout(function(){
        window.location.href = 'resultest.php';
    }, 500);
    
}




$(document).ready(function () {
    init();
    init2();
    init3();
    init4();
    init5();
    init6();
    init7();
    init8();
    init9();
    init10();
    init11();
    init12();
    $('.num_1').on('click', destroyblock); 
    $('.num_2_2').on('click', destroyblock2); 
    $('.num_3_3').on('click', destroyblock3); 
    $('.num_4_4').on('click', destroyblock4); 
    $('.num_5_5').on('click', destroyblock5); 
    $('.num_6_6').on('click', destroyblock6); 
    $('.num_7_7').on('click', destroyblock7); 
    $('.num_8_8').on('click', destroyblock8); 
    $('.num_9_9').on('click', destroyblock9); 
    $('.num_10_10').on('click', destroyblock10); 
    $('#correct_answer_1').on('click', clickplus1); 
    $('#correct_answer_2').on('click', clickplus2); 
    $('#correct_answer_3').on('click', clickplus3); 
    $('#correct_answer_4').on('click', clickplus4); 
    $('#correct_answer_5').on('click', clickplus5); 
    $('#correct_answer_6').on('click', clickplus6); 
    $('#correct_answer_7').on('click', clickplus7); 
    $('#correct_answer_8').on('click', clickplus8); 
    $('#correct_answer_9').on('click', clickplus9); 
    $('#correct_answer_10').on('click', clickplus10); 
    $('#not_correct_answer_1').on('click', clickminus1); 
    $('#not_correct_answer_2').on('click', clickminus2); 
    $('#not_correct_answer_3').on('click', clickminus3); 
    $('#not_correct_answer_4').on('click', clickminus4); 
    $('#not_correct_answer_5').on('click', clickminus5); 
    $('#not_correct_answer_6').on('click', clickminus6); 
    $('#not_correct_answer_7').on('click', clickminus7); 
    $('#not_correct_answer_8').on('click', clickminus8); 
    $('#not_correct_answer_9').on('click', clickminus9); 
    $('#not_correct_answer_10').on('click', clickminus10); 
    $('#not_correct_answer_1_1').on('click', clickminus1); 
    $('#not_correct_answer_1_2').on('click', clickminus2); 
    $('#not_correct_answer_1_3').on('click', clickminus3); 
    $('#not_correct_answer_1_4').on('click', clickminus4); 
    $('#not_correct_answer_1_5').on('click', clickminus5); 
    $('#not_correct_answer_1_6').on('click', clickminus6); 
    $('#not_correct_answer_1_7').on('click', clickminus7); 
    $('#not_correct_answer_1_8').on('click', clickminus8); 
    $('#not_correct_answer_1_9').on('click', clickminus9); 
    $('#not_correct_answer_1_10').on('click', clickminus10); 
    $('#not_correct_answer_2_1').on('click', clickminus1); 
    $('#not_correct_answer_2_2').on('click', clickminus2); 
    $('#not_correct_answer_2_3').on('click', clickminus3); 
    $('#not_correct_answer_2_4').on('click', clickminus4); 
    $('#not_correct_answer_2_5').on('click', clickminus5); 
    $('#not_correct_answer_2_6').on('click', clickminus6); 
    $('#not_correct_answer_2_7').on('click', clickminus7); 
    $('#not_correct_answer_2_8').on('click', clickminus8); 
    $('#not_correct_answer_2_9').on('click', clickminus9); 
    $('#not_correct_answer_2_10').on('click', clickminus10); 
});
