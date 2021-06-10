var id_tem = document.cookie;
var id_tem = id_tem.split('♠')[0];
var id_tem = id_tem.split('').reverse().join('') ;// сделали реверс
var id_tem = id_tem.split('♣')[0];

function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  var tem = document.cookie;
  var tem = tem.split('○')[0];
  var tem = tem.split('').reverse().join('') ;// сделали реверс
  var tem = tem.split('•')[0];
  var tem = tem.split('').reverse().join('') ;// сделали реверс
  $.post(
      "core.php",
      {
          "action" : "loadSingleTem_result",
          "tema" : tem
      },
      testOut
  );
}

function testOut(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
    
        out +=`<p class="result_text">РЕЗУЛЬТАТЫ<br>ТЕСТИРОВАНИЯ</p>`;
          out +='<div class="resultat">';
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test1.php">1${data.condition_test1}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test2.php">2${data.condition_test2}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test3.php">3${data.condition_test3}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test4.php">4${data.condition_test4}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test5.php">5${data.condition_test5}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test6.php">6${data.condition_test6}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test7.php">7${data.condition_test7}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test8.php">8${data.condition_test8}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test9.php">9${data.condition_test9}</a></p>`;
             out +=`<p class="condition_test_result"><a href="../Training_system/testminus/test10.php">10${data.condition_test10}</a></p>`;
        out +='</div>';
        out +=` <div class="wraper_result">`;
        out +=` <div class="button_result">`;
        out +=`      <a href="tem.php#${id_tem}"  class="exit_test">ВЫХОД<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"><a href="tem.php#${id_tem}" class="exit_test2">Прогресс сохранится</a></a>`;
        out +=`   </div>`;
        out +=` <div class="button_result">`;
        out +=`      <a href="test.php"  class="exit_test_222">НАЧАТЬ ЗАНОВО<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a>`;
        out +=`   </div>`;
        out +=`   </div>`;
        $('.test-out-result').html(out);
        var test1 = `${data.condition_test1}`;
        var test2 = `${data.condition_test2}`;
        var test3 = `${data.condition_test3}`;
        var test4 = `${data.condition_test4}`;
        var test5 = `${data.condition_test5}`;
        var test6 = `${data.condition_test6}`;
        var test7 = `${data.condition_test7}`;
        var test8 = `${data.condition_test8}`;
        var test9 = `${data.condition_test9}`;
        var test10 = `${data.condition_test10}`;
        var sum = 0;
        if(test1 == '+'){
        sum++
        }else{}
        if(test2 == '+'){
        sum++
        }else{}
        if(test3 == '+'){
        sum++
        }else{}
        if(test4 == '+'){
        sum++
        }else{}
        if(test5 == '+'){
        sum++
        }else{}
        if(test6 == '+'){
        sum++
        }else{}
        if(test7 == '+'){
        sum++
        }else{}
        if(test8 == '+'){
        sum++
        }else{}
        if(test9 == '+'){
        sum++
        }else{}
        if(test10 == '+'){
        sum++
        var tem = document.cookie;
        var tem = tem.split('○')[0];
        var tem = tem.split('').reverse().join('') ;// сделали реверс
        var tem = tem.split('•')[0];
        var tem = tem.split('').reverse().join('') ;// сделали реверс
        $.post(
            "core.php",
            {
                "action" : "sum_test",
                "tema" : tem,
                "sum" : sum,
                "name_block" : 'sumtem'
            },
        );
    
        }else{
            var tem = document.cookie;
            var tem = tem.split('○')[0];
            var tem = tem.split('').reverse().join('') ;// сделали реверс
            var tem = tem.split('•')[0];
            var tem = tem.split('').reverse().join('') ;// сделали реверс
            $.post(
                "core.php",
                {
                    "action" : "sum_test",
                    "tema" : tem,
                    "sum" : sum,
                    "name_block" : 'sumtem'
                },
            );
        
        }
        
        
        
      }
      else{
          $('.test-out-result').html('Такой темы не существует');
      }
}

$(document).ready(function () {
    init();
});