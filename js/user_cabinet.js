function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "loadcabinet"
      },
      temOut
  );

}

function init2() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "result_user"
      },
      temOut2
  );

}

function init3() {
  //вычитуем файл goods.json
//  $.getJSON("goods.json", goodsOut);
$.post(
    "core.php",
    {
        "action" : "result_user"
    },
    temOut3
);

}



function temOut(data) {
    // вывод на страницу
    data = JSON.parse(data);
    console.log(data);
    var out='';
    for (var key in data) {

        out +=`<p class="cabinet">ЛИЧНЫЙ ПРОФИЛЬ</p>`;
        out +=`<p class="name_user_cabinet">${data[key].login}</p>`;
        out +=`<p class="abiturient_user_cabinet">АБИТУРИЕНТ</p>`;
        out +=`<p class="city_user_cabinet">${data[key].city}</p>`;
      
    }
    $('.user-out').html(out);

}

function temOut2(data) {
    // вывод на страницу
    data = JSON.parse(data);
    console.log(data);
    var out='';
    for (var key in data) {
        out +=`<div class="wreper_cabinet">`;
        out +=`<p class="tema_user_cabinet">${data[key].tema}</p>`;
        out +=`<p class="sumtem_user_cabinet">${data[key].sumtem}/10</p>`;
        out +=`<p class="practika_user_cabinet">${data[key].correct_praktika}/1</p>`;
        out +=`</div>`;
      
    }
    $('.user-out2').html(out);

}

function temOut3(data) {
  // вывод на страницу
  data = JSON.parse(data);
  console.log(data);
  var sumanswergod= '';
  for (var key in data) {
      var sumanswertest =`${data[key].sumtem}`;
      if (sumanswertest != 0){
          sumanswergod = Number(sumanswertest) + Number(sumanswergod);
      }
      var sumanswerpraktic =`${data[key].correct_praktika}`;
      if (sumanswerpraktic != 0){
          sumanswergod = Number(sumanswerpraktic) + Number(sumanswergod);
      }
  }

  document.cookie = "progresgoodAnswer="+ sumanswergod;
}


function delit() {
  //обновление, передача данных на сервер
  var id = $('#gid').val();
  if (id!==""){
    $.post(
      "core.php",
      {
        "action" : "delete_user_tem"
 
      },
      
    );
  }
  setTimeout(function(){
    document.cookie = "progresgoodAnswer=;max-age=-1";
    window.location.href = 'user_cabinet.php';
}, 500);
}

$(document).ready(function () {
    init(); 
    init2(); 
    init3(); 
    $('.del-to-progres').on('click', delit);
});
