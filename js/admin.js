function init() {
    $.post(
        "core.php",
        {
            "action" : "init"
        },
        showTems
    );
}

function showTems(data) {
    data = JSON.parse(data);
    console.log(data);
    var out='<select>';
    out +='<option data-id="0">ДОБАВЛЕНИЕ НОВОЙ ТЕМЫ</option>';
    for (var id in data) {
        out +=`<option data-id="${id}">ТЕМА : ${data[id].tema}</option>`;
    }
    out +='</select>';
    $('.out').html(out);
    $('.out select').on('change', selectTems);

}



function selectTems() {
  //Получаем тот товар который выбран
  var id = $('.out select option:selected').attr('data-id');
  console.log(id);
  $.post(
    "core.php",
    {
      "action" : "selectOneTems",
      "gid" : id
    },
    function(data){

      data = JSON.parse(data);
        $('#gtema').val(data.tema);
        $('#gimg_glav').val(data.img_glav);
        $('#gklass').val(data.klass);
        $('#gtext_top_img').val(data.text_top_img);
        $('#gimg_scientist').val(data.img_scientist);
        $('#gyear').val(data.year);
        $('#gdescription').val(data.description);
        $('#gdescription2').val(data.description2);
        $('#gtop_text_img').val(data.top_text_img);
        $('#gimg1').val(data.img1);
        $('#gimg2').val(data.img2);
        $('#gdescription3').val(data.description3);
        $('#gdescription4').val(data.description4);
        $('#gdescription5').val(data.description5);
        $('#ghash').val(data.hash);
        $('#ghash2').val(data.hash2);
        $('#ghash3').val(data.hash3);
        $('#gcondition_test1').val(data.condition_test1);
        $('#gcorrect_answer1').val(data.correct_answer1);
        $('#gnot_correct_answer1').val(data.not_correct_answer1);
        $('#gnot_correct2_answer1').val(data.not_correct2_answer1);
        $('#gnot_correct3_answer1').val(data.not_correct3_answer1);
        $('#gcondition_test2').val(data.condition_test2);
        $('#gcorrect_answer2').val(data.correct_answer2);
        $('#gnot_correct_answer2').val(data.not_correct_answer2);
        $('#gnot_correct2_answer2').val(data.not_correct2_answer2);
        $('#gnot_correct3_answer2').val(data.not_correct3_answer2);
        $('#gcondition_test3').val(data.condition_test3);
        $('#gcorrect_answer3').val(data.correct_answer3);
        $('#gnot_correct_answer3').val(data.not_correct_answer3);
        $('#gnot_correct2_answer3').val(data.not_correct2_answer3);
        $('#gnot_correct3_answer3').val(data.not_correct3_answer3);
        $('#gcondition_test4').val(data.condition_test4);
        $('#gcorrect_answer4').val(data.correct_answer4);
        $('#gnot_correct_answer4').val(data.not_correct_answer4);
        $('#gnot_correct2_answer4').val(data.not_correct2_answer4);
        $('#gnot_correct3_answer4').val(data.not_correct3_answer4);
        $('#gcondition_test5').val(data.condition_test5);
        $('#gcorrect_answer5').val(data.correct_answer5);
        $('#gnot_correct_answer5').val(data.not_correct_answer5);
        $('#gnot_correct2_answer5').val(data.not_correct2_answer5);
        $('#gnot_correct3_answer5').val(data.not_correct3_answer5);
        $('#gcondition_test6').val(data.condition_test6);
        $('#gcorrect_answer6').val(data.correct_answer6);
        $('#gnot_correct_answer6').val(data.not_correct_answer6);
        $('#gnot_correct2_answer6').val(data.not_correct2_answer6);
        $('#gnot_correct3_answer6').val(data.not_correct3_answer6);
        $('#gcondition_test7').val(data.condition_test7);
        $('#gcorrect_answer7').val(data.correct_answer7);
        $('#gnot_correct_answer7').val(data.not_correct_answer7);
        $('#gnot_correct2_answer7').val(data.not_correct2_answer7);
        $('#gnot_correct3_answer7').val(data.not_correct3_answer7);
        $('#gcondition_test8').val(data.condition_test8);
        $('#gcorrect_answer8').val(data.correct_answer8);
        $('#gnot_correct_answer8').val(data.not_correct_answer8);
        $('#gnot_correct2_answer8').val(data.not_correct2_answer8);
        $('#gnot_correct3_answer8').val(data.not_correct3_answer8);
        $('#gcondition_test9').val(data.condition_test9);
        $('#gcorrect_answer9').val(data.correct_answer9);
        $('#gnot_correct_answer9').val(data.not_correct_answer9);
        $('#gnot_correct2_answer9').val(data.not_correct2_answer9);
        $('#gnot_correct3_answer9').val(data.not_correct3_answer9);
        $('#gcondition_test10').val(data.condition_test10);
        $('#gcorrect_answer10').val(data.correct_answer10);
        $('#gnot_correct_answer10').val(data.not_correct_answer10);
        $('#gnot_correct2_answer10').val(data.not_correct2_answer10);
        $('#gnot_correct3_answer10').val(data.not_correct3_answer10);
        $('#gcondition_praktika').val(data.condition_praktika);
        $('#gtext_praktika').val(data.text_praktika);
        $('#gcorrect_praktika').val(data.correct_praktika);
        $('#gid').val(data.id);
    }
  );
}

function saveToDb() {
  //обновление, передача данных на сервер
  var id = $('#gid').val();
  if (id!==""){
    $.post(
      "core.php",
      {
        "action" : "updateTems",
        "id" : id,
        "gtema" : $('#gtema').val(),
        "gimg_glav" : $('#gimg_glav').val(),
        "gklass" : $('#gklass').val(),
        "gtext_top_img" : $('#gtext_top_img').val(),
        "gimg_scientist" : $('#gimg_scientist').val(),
        "gyear" : $('#gyear').val(),
        "gdescription" : $('#gdescription').val(),
        "gdescription2" : $('#gdescription2').val(),
        "gtop_text_img" : $('#gtop_text_img').val(),
        "gimg1" : $('#gimg1').val(),
        "gimg2" : $('#gimg2').val(),
        "gdescription3" : $('#gdescription3').val(),
        "gdescription4" : $('#gdescription4').val(),
        "gdescription5" : $('#gdescription5').val(),
        "ghash" : $('#ghash').val(),
        "ghash2" : $('#ghash2').val(),
        "ghash3" : $('#ghash3').val(),
        "gcondition_test1" : $('#gcondition_test1').val(),
        "gcorrect_answer1" : $('#gcorrect_answer1').val(),
        "gnot_correct_answer1" : $('#gnot_correct_answer1').val(),
        "gnot_correct2_answer1" : $('#gnot_correct2_answer1').val(),
        "gnot_correct3_answer1" : $('#gnot_correct3_answer1').val(),
        "gcondition_test2" : $('#gcondition_test2').val(),
        "gcorrect_answer2" : $('#gcorrect_answer2').val(),
        "gnot_correct_answer2" : $('#gnot_correct_answer2').val(),
        "gnot_correct2_answer2" : $('#gnot_correct2_answer2').val(),
        "gnot_correct3_answer2" : $('#gnot_correct3_answer2').val(),
        "gcondition_test3" : $('#gcondition_test3').val(),
        "gcorrect_answer3" : $('#gcorrect_answer3').val(),
        "gnot_correct_answer3" : $('#gnot_correct_answer3').val(),
        "gnot_correct2_answer3" : $('#gnot_correct2_answer3').val(),
        "gnot_correct3_answer3" : $('#gnot_correct3_answer3').val(),
        "gcondition_test4" : $('#gcondition_test4').val(),
        "gcorrect_answer4" : $('#gcorrect_answer4').val(),
        "gnot_correct_answer4" : $('#gnot_correct_answer4').val(),
        "gnot_correct2_answer4" : $('#gnot_correct2_answer4').val(),
        "gnot_correct3_answer4" : $('#gnot_correct3_answer4').val(),
        "gcondition_test5" : $('#gcondition_test5').val(),
        "gcorrect_answer5" : $('#gcorrect_answer5').val(),
        "gnot_correct_answer5" : $('#gnot_correct_answer5').val(),
        "gnot_correct2_answer5" : $('#gnot_correct2_answer5').val(),
        "gnot_correct3_answer5" : $('#gnot_correct3_answer5').val(),
        "gcondition_test6" : $('#gcondition_test6').val(),
        "gcorrect_answer6" : $('#gcorrect_answer6').val(),
        "gnot_correct_answer6" : $('#gnot_correct_answer6').val(),
        "gnot_correct2_answer6" : $('#gnot_correct2_answer6').val(),
        "gnot_correct3_answer6" : $('#gnot_correct3_answer6').val(),
        "gcondition_test7" : $('#gcondition_test7').val(),
        "gcorrect_answer7" : $('#gcorrect_answer7').val(),
        "gnot_correct_answer7" : $('#gnot_correct_answer7').val(),
        "gnot_correct2_answer7" : $('#gnot_correct2_answer7').val(),
        "gnot_correct3_answer7" : $('#gnot_correct3_answer7').val(),
        "gcondition_test8" : $('#gcondition_test8').val(),
        "gcorrect_answer8" : $('#gcorrect_answer8').val(),
        "gnot_correct_answer8" : $('#gnot_correct_answer8').val(),
        "gnot_correct2_answer8" : $('#gnot_correct2_answer8').val(),
        "gnot_correct3_answer8" : $('#gnot_correct3_answer8').val(),
        "gcondition_test9" : $('#gcondition_test9').val(),
        "gcorrect_answer9" : $('#gcorrect_answer9').val(),
        "gnot_correct_answer9" : $('#gnot_correct_answer9').val(),
        "gnot_correct2_answer9" : $('#gnot_correct2_answer9').val(),
        "gnot_correct3_answer9" : $('#gnot_correct3_answer9').val(),
        "gcondition_test10" : $('#gcondition_test10').val(),
        "gcorrect_answer10" : $('#gcorrect_answer10').val(),
        "gnot_correct_answer10" : $('#gnot_correct_answer10').val(),
        "gnot_correct2_answer10" : $('#gnot_correct2_answer10').val(),
        "gnot_correct3_answer10" : $('#gnot_correct3_answer10').val(),
        "gcondition_praktika" : $('#gcondition_praktika').val(),
        "gtext_praktika" : $('#gtext_praktika').val(),
        "gcorrect_praktika" : $('#gcorrect_praktika').val()
      },
      function(data){
          init();
          window.location.reload();
        }

    );
  }
  else {
    $.post(
      "core.php",
      {
        "action" : "newTems",
        "id" : 0,
        "gtema" : $('#gtema').val(),
        "gimg_glav" : $('#gimg_glav').val(),
        "gklass" : $('#gklass').val(),
        "gtext_top_img" : $('#gtext_top_img').val(),
        "gimg_scientist" : $('#gimg_scientist').val(),
        "gyear" : $('#gyear').val(),
        "gdescription" : $('#gdescription').val(),
        "gdescription2" : $('#gdescription2').val(),
        "gtop_text_img" : $('#gtop_text_img').val(),
        "gimg1" : $('#gimg1').val(),
        "gimg2" : $('#gimg2').val(),
        "gdescription3" : $('#gdescription3').val(),
        "gdescription4" : $('#gdescription4').val(),
        "gdescription5" : $('#gdescription5').val(),
        "ghash" : $('#ghash').val(),
        "ghash2" : $('#ghash2').val(),
        "ghash3" : $('#ghash3').val(),
        "gcondition_test1" : $('#gcondition_test1').val(),
        "gcorrect_answer1" : $('#gcorrect_answer1').val(),
        "gnot_correct_answer1" : $('#gnot_correct_answer1').val(),
        "gnot_correct2_answer1" : $('#gnot_correct2_answer1').val(),
        "gnot_correct3_answer1" : $('#gnot_correct3_answer1').val(),
        "gcondition_test2" : $('#gcondition_test2').val(),
        "gcorrect_answer2" : $('#gcorrect_answer2').val(),
        "gnot_correct_answer2" : $('#gnot_correct_answer2').val(),
        "gnot_correct2_answer2" : $('#gnot_correct2_answer2').val(),
        "gnot_correct3_answer2" : $('#gnot_correct3_answer2').val(),
        "gcondition_test3" : $('#gcondition_test3').val(),
        "gcorrect_answer3" : $('#gcorrect_answer3').val(),
        "gnot_correct_answer3" : $('#gnot_correct_answer3').val(),
        "gnot_correct2_answer3" : $('#gnot_correct2_answer3').val(),
        "gnot_correct3_answer3" : $('#gnot_correct3_answer3').val(),
        "gcondition_test4" : $('#gcondition_test4').val(),
        "gcorrect_answer4" : $('#gcorrect_answer4').val(),
        "gnot_correct_answer4" : $('#gnot_correct_answer4').val(),
        "gnot_correct2_answer4" : $('#gnot_correct2_answer4').val(),
        "gnot_correct3_answer4" : $('#gnot_correct3_answer4').val(),
        "gcondition_test5" : $('#gcondition_test5').val(),
        "gcorrect_answer5" : $('#gcorrect_answer5').val(),
        "gnot_correct_answer5" : $('#gnot_correct_answer5').val(),
        "gnot_correct2_answer5" : $('#gnot_correct2_answer5').val(),
        "gnot_correct3_answer5" : $('#gnot_correct3_answer5').val(),
        "gcondition_test6" : $('#gcondition_test6').val(),
        "gcorrect_answer6" : $('#gcorrect_answer6').val(),
        "gnot_correct_answer6" : $('#gnot_correct_answer6').val(),
        "gnot_correct2_answer6" : $('#gnot_correct2_answer6').val(),
        "gnot_correct3_answer6" : $('#gnot_correct3_answer6').val(),
        "gcondition_test7" : $('#gcondition_test7').val(),
        "gcorrect_answer7" : $('#gcorrect_answer7').val(),
        "gnot_correct_answer7" : $('#gnot_correct_answer7').val(),
        "gnot_correct2_answer7" : $('#gnot_correct2_answer7').val(),
        "gnot_correct3_answer7" : $('#gnot_correct3_answer7').val(),
        "gcondition_test8" : $('#gcondition_test8').val(),
        "gcorrect_answer8" : $('#gcorrect_answer8').val(),
        "gnot_correct_answer8" : $('#gnot_correct_answer8').val(),
        "gnot_correct2_answer8" : $('#gnot_correct2_answer8').val(),
        "gnot_correct3_answer8" : $('#gnot_correct3_answer8').val(),
        "gcondition_test9" : $('#gcondition_test9').val(),
        "gcorrect_answer9" : $('#gcorrect_answer9').val(),
        "gnot_correct_answer9" : $('#gnot_correct_answer9').val(),
        "gnot_correct2_answer9" : $('#gnot_correct2_answer9').val(),
        "gnot_correct3_answer9" : $('#gnot_correct3_answer9').val(),
        "gcondition_test10" : $('#gcondition_test10').val(),
        "gcorrect_answer10" : $('#gcorrect_answer10').val(),
        "gnot_correct_answer10" : $('#gnot_correct_answer10').val(),
        "gnot_correct2_answer10" : $('#gnot_correct2_answer10').val(),
        "gnot_correct3_answer10" : $('#gnot_correct3_answer10').val(),
        "gcondition_praktika" : $('#gcondition_praktika').val(),
        "gtext_praktika" : $('#gtext_praktika').val(),
        "gcorrect_praktika" : $('#gcorrect_praktika').val()
      },
      function(data){
          init();
          window.location.reload();
        }
    );
  }
}

function delite() {
  //обновление, передача данных на сервер
  var id = $('#gid').val();
  if (id!==""){
    $.post(
      "core.php",
      {
        "action" : "delTems",
        "id" : id,
        "gtema" : $('#gtema').val(),
        "gimg_glav" : $('#gimg_glav').val(),
        "gklass" : $('#gklass').val(),
        "gtext_top_img" : $('#gtext_top_img').val(),
        "gimg_scientist" : $('#gimg_scientist').val(),
        "gyear" : $('#gyear').val(),
        "gdescription" : $('#gdescription').val(),
        "gdescription2" : $('#gdescription2').val(),
        "gtop_text_img" : $('#gtop_text_img').val(),
        "gimg1" : $('#gimg1').val(),
        "gimg2" : $('#gimg2').val(),
        "gdescription3" : $('#gdescription3').val(),
        "gdescription4" : $('#gdescription4').val(),
        "gdescription5" : $('#gdescription5').val(),
        "ghash" : $('#ghash').val(),
        "ghash2" : $('#ghash2').val(),
        "ghash3" : $('#ghash3').val(),
        "gcondition_test1" : $('#gcondition_test1').val(),
        "gcorrect_answer1" : $('#gcorrect_answer1').val(),
        "gnot_correct_answer1" : $('#gnot_correct_answer1').val(),
        "gnot_correct2_answer1" : $('#gnot_correct2_answer1').val(),
        "gnot_correct3_answer1" : $('#gnot_correct3_answer1').val(),
        "gcondition_test2" : $('#gcondition_test2').val(),
        "gcorrect_answer2" : $('#gcorrect_answer2').val(),
        "gnot_correct_answer2" : $('#gnot_correct_answer2').val(),
        "gnot_correct2_answer2" : $('#gnot_correct2_answer2').val(),
        "gnot_correct3_answer2" : $('#gnot_correct3_answer2').val(),
        "gcondition_test3" : $('#gcondition_test3').val(),
        "gcorrect_answer3" : $('#gcorrect_answer3').val(),
        "gnot_correct_answer3" : $('#gnot_correct_answer3').val(),
        "gnot_correct2_answer3" : $('#gnot_correct2_answer3').val(),
        "gnot_correct3_answer3" : $('#gnot_correct3_answer3').val(),
        "gcondition_test4" : $('#gcondition_test4').val(),
        "gcorrect_answer4" : $('#gcorrect_answer4').val(),
        "gnot_correct_answer4" : $('#gnot_correct_answer4').val(),
        "gnot_correct2_answer4" : $('#gnot_correct2_answer4').val(),
        "gnot_correct3_answer4" : $('#gnot_correct3_answer4').val(),
        "gcondition_test5" : $('#gcondition_test5').val(),
        "gcorrect_answer5" : $('#gcorrect_answer5').val(),
        "gnot_correct_answer5" : $('#gnot_correct_answer5').val(),
        "gnot_correct2_answer5" : $('#gnot_correct2_answer5').val(),
        "gnot_correct3_answer5" : $('#gnot_correct3_answer5').val(),
        "gcondition_test6" : $('#gcondition_test6').val(),
        "gcorrect_answer6" : $('#gcorrect_answer6').val(),
        "gnot_correct_answer6" : $('#gnot_correct_answer6').val(),
        "gnot_correct2_answer6" : $('#gnot_correct2_answer6').val(),
        "gnot_correct3_answer6" : $('#gnot_correct3_answer6').val(),
        "gcondition_test7" : $('#gcondition_test7').val(),
        "gcorrect_answer7" : $('#gcorrect_answer7').val(),
        "gnot_correct_answer7" : $('#gnot_correct_answer7').val(),
        "gnot_correct2_answer7" : $('#gnot_correct2_answer7').val(),
        "gnot_correct3_answer7" : $('#gnot_correct3_answer7').val(),
        "gcondition_test8" : $('#gcondition_test8').val(),
        "gcorrect_answer8" : $('#gcorrect_answer8').val(),
        "gnot_correct_answer8" : $('#gnot_correct_answer8').val(),
        "gnot_correct2_answer8" : $('#gnot_correct2_answer8').val(),
        "gnot_correct3_answer8" : $('#gnot_correct3_answer8').val(),
        "gcondition_test9" : $('#gcondition_test9').val(),
        "gcorrect_answer9" : $('#gcorrect_answer9').val(),
        "gnot_correct_answer9" : $('#gnot_correct_answer9').val(),
        "gnot_correct2_answer9" : $('#gnot_correct2_answer9').val(),
        "gnot_correct3_answer9" : $('#gnot_correct3_answer9').val(),
        "gcondition_test10" : $('#gcondition_test10').val(),
        "gcorrect_answer10" : $('#gcorrect_answer10').val(),
        "gnot_correct_answer10" : $('#gnot_correct_answer10').val(),
        "gnot_correct2_answer10" : $('#gnot_correct2_answer10').val(),
        "gnot_correct3_answer10" : $('#gnot_correct3_answer10').val(),
        "gcondition_praktika" : $('#gcondition_praktika').val(),
        "gtext_praktika" : $('#gtext_praktika').val(),
        "gcorrect_praktika" : $('#gcorrect_praktika').val()
      },
      function(data){
       
          //setTimeout(function(){ location.reload() }, 500)
          init();
          window.location.reload();
          
        }
    );
  }
    
}

$(document).ready(function () {
   init();
   $('.add-to-db').on('click', saveToDb);
   $('.del-to-db').on('click', delite);
   //Вызов события
});
