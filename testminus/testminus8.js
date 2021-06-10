var id_tem = document.cookie;
var id_tem = id_tem.split('♠')[0];
var id_tem = id_tem.split('').reverse().join('') ;// сделали реверс
var id_tem = id_tem.split('♣')[0];

function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);

  $.post(
      "../core.php",
      {
          "action" : "loadSingleTem",
          "id" : id_tem
      },
      testOut
  );
}

function testOut(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="tests_result">';

            out +='<div class="border_result">';
             out +=`<p class="num1">8/10</p>`;
             out +=` <p class="num_result">?</p>`;
             out +=`<p class="condition_test">${data.condition_test8}</p>`;
             out +='<div class="num_test">';
             out +=`<p class="not_correct_answer">${data.not_correct3_answer8}</p><div id="result1none"></div>`;
                out +=`<p class="correct_answer">${data.correct_answer8}</p><div id="result2none"></div>`;
                out +=`<p id="not_correct_answer1">${data.not_correct_answer8}</p><div id="result3none"></div>`;
                out +=`<p id="not_correct2_answer1">${data.not_correct2_answer8}</p><div id="result4none"></div>`;
            out +='</div>';
            out +='</div>';
        out +='</div>';
        out +=`<p class="correct_answer_result">ПРАВИЛЬНЫЙ<br>ОТВЕТ - ${data.correct_answer8}</p>`;
        out +=` <div class="wraper_result_test">`;
        out +=` <div class="button_result_test">`;
        out +=`      <a href="../resultest.php"  class="exit_test">ВЫЙТИ<img class="img_bottom" src="../img/cursor.png" alt="" width="37px" height="37px"><a href="../tem.php#${id_tem}" class="exit_test2">Прогресс сохранится</a></a>`;
        out +=`   </div>`;
        out +=` <div class="button_result_test">`;
        out +=`      <a href="../tem.php#${id_tem}"  class="exit_test_222">ПОВТОРИТЬ ТЕОРИЮ<img class="img_bottom" src="../img/cursor.png" alt="" width="37px" height="37px"></a>`;
        out +=`   </div>`;
        out +=`   </div>`;
        $('.test-out-g').html(out);
      }
      else{
          $('.test-out-g').html('Такой темы не существует');
      }
}

$(document).ready(function () {
    init(); 
});
