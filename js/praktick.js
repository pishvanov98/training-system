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
      praktOut
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
      praktOut2
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
      praktOut3
  );
}
function praktOut(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
          out +='<div class="praktic">';
            out +='<div class="border_praktic">';
             out +=`<p class="condition_praktic">${data.condition_praktika}</p>`;
             out +=` <div class="clear"><br></div>`; 
             out +=` <div class="practic_otvet"><p class="correct_praktic_2">${data.text_praktika}</p><input id="input_practic" type="text" name="answer"  autocomplete="off" class="passlog"></div>`;
            out +='</div>';
        out +='</div>';
        $('.test-out-g').html(out);
        document.cookie = "AnswerPractic="+ "▬" + `${data.correct_praktika}` + "▐";
      }
      else{
          $('.test-out-g').html('Такой практики не существует');
      }
}

function praktOut2(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        out +=`      <a href="tem.php#${id_tem}"  class="exit_test">ВЫХОД<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"><a href="tem.php#${id_tem}" class="exit_test2">Прогресс сохранится</a></a>`;
        $('.test-out-g2').html(out);
      }
      else{
          $('.test-out-g2').html('Такой практики не существует');
      }
}

function praktOut3(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        out +=`      <a href="praktick_answer.php"  class="exit_test">СДАТЬ ЗАДАНИЕ<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a>`;
        $('.test-out-g3').html(out);
      }
      else{
          $('.test-out-g3').html('Такой практики не существует');
      }
}

function inputanswer(){
    var AnswerPractic = document.cookie;
    var AnswerPractic = AnswerPractic.split('▐')[0];
    var AnswerPractic = AnswerPractic.split('').reverse().join('') ;// сделали реверс
    var AnswerPractic = AnswerPractic.split('▬')[0];
    var AnswerPractic = AnswerPractic.split('').reverse().join('') ;// сделали реверс
    var answer_user = document.getElementById('input_practic');

    if (answer_user.value == AnswerPractic){
        document.cookie = "AnswerPractic="+ "▬" + "correct" + "▐";
        var tem = document.cookie;
        var tem = tem.split('○')[0];
        var tem = tem.split('').reverse().join('') ;// сделали реверс
        var tem = tem.split('•')[0];
        var tem = tem.split('').reverse().join('') ;// сделали реверс
        $.post(
            "core.php",
            {
                "action" : "updatepraktika_user",
                "tema" : tem,
                "name_block" : 'correct_praktika'
            },
        );

    }
    else{
        document.cookie = "AnswerPractic="+ "▬" + "incorrect" + "▐";
        var tem = document.cookie;
        var tem = tem.split('○')[0];
        var tem = tem.split('').reverse().join('') ;// сделали реверс
        var tem = tem.split('•')[0];
        var tem = tem.split('').reverse().join('') ;// сделали реверс
        $.post(
            "core.php",
            {
                "action" : "updatepraktika_userminus",
                "tema" : tem,
                "name_block" : 'correct_praktika'
            },
        );

    }

}


$(document).ready(function () {
    init();
    init2();
    init3();
    $('.test-out-g3').on('click', inputanswer);
});
