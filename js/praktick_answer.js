var id_tem = document.cookie;
var id_tem = id_tem.split('♠')[0];
var id_tem = id_tem.split('').reverse().join('') ;// сделали реверс
var id_tem = id_tem.split('♣')[0];



var AnswerPractic = document.cookie;
var AnswerPractic = AnswerPractic.split('▐')[0];
var AnswerPractic = AnswerPractic.split('').reverse().join('') ;// сделали реверс
var AnswerPractic = AnswerPractic.split('▬')[0];
var AnswerPractic = AnswerPractic.split('').reverse().join('') ;// сделали реверс

function start(){
if (AnswerPractic == 'correct'){
    practikOutcorrect();
}else{
    practikOutincorrect();
}
}


function practikOutcorrect(data) {
    // вывод на страницу
        var out='';
        out +=`<p class="result_text">РЕЗУЛЬТАТЫ<br>ПРАКТИЧЕСКОГО ЗАДАНИЯ</p>`;
          out +='<div class="resultat">';
    
             out +=`<p class="condition_practic_result">ЗАДАНИЕ РЕШЕНО ВЕРНО</p>`;
        out +='</div>';
        out +=` <div class="wraper_result_practik">`;
        out +=` <div class="button_result_practik1_1">`;
        out +=`      <a href="tem.php#${id_tem}"  class="exit_test">ВЫХОД<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"><a href="tem.php#${id_tem}" class="exit_test2">Прогресс сохранится</a></a>`;
        out +=`   </div>`;
        out +=` <div class="button_result_practik2_2">`;
        out +=`      <a href="praktick.php"  class="exit_test">НАЧАТЬ ЗАНОВО<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a>`;
        out +=`   </div>`;
        out +=`   </div>`;
        $('.test-out-result').html(out);
}

function practikOutincorrect(data) {
    // вывод на страницу

        var out='';
        out +=`<p class="result_text">РЕЗУЛЬТАТЫ<br>ПРАКТИЧЕСКОГО ЗАДАНИЯ</p>`;
          out +='<div class="resultat">';
    
             out +=`<p class="condition_practic_result">ЗАДАНИЕ РЕШЕНО НЕ ВЕРНО</p>`;
        out +='</div>';
        out +=` <div class="wraper_result_practik">`;
        out +=` <div class="button_result_practik1_1">`;
        out +=`      <a href="tem.php#${id_tem}"  class="exit_test">ВЫХОД<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"><a href="tem.php#${id_tem}" class="exit_test2">Прогресс сохранится</a></a>`;
        out +=`   </div>`;
        out +=` <div class="button_result_practik2_2">`;
        out +=`      <a href="praktick.php"  class="exit_test">НАЧАТЬ ЗАНОВО<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a>`;
        out +=`   </div>`;
        out +=`   </div>`;
        $('.test-out-result').html(out);

}

$(document).ready(function () {
    start();
});