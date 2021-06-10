
function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "loadTem"
      },
      temOut
  );
  setTimeout(function(){
    document.cookie = "hashinit=;max-age=-1";
}, 2000);
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



function temOut(data) {
    // вывод на страницу
    data = JSON.parse(data);
    console.log(data);
    var out='';
    var sum=0;
    for (var key in data) {

        out +=`<div class="tem">`;
        var sumkey =`${key}`;
        if(sumkey !=''){
            sum++;
        }
        out +=`<a href="tem.php#${key}"><img class="img" src="images/${data[key].img_glav}" alt="" width="1023px" height="426px"></a>`;
        out +=`<p class="name_href"><a href="tem.php#${key}">${data[key].tema}</a></p>`;
        out +=`<a href="tem.php#${key}"><img class="img_bot" src="img/cursor.png" alt="" width="39px" height="39px"></a>`;
        out +=`</div>`;
    }
    $('.tem-out').html(out);
    var sumprogres = sum * 11;
    document.cookie = "sumprogres="+ sumprogres;
}

function temOut2(data) {
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


function loadhesh2(){
    document.cookie = "hashinit="+ "СКРЕЩИВАНИЕ";
    init();
}
function loadhesh3(){
    document.cookie = "hashinit="+ "ХРОМОСОМЫ";
    init();
}
function loadhesh4(){
    document.cookie = "hashinit="+ "ГЕНЫ";
    init();
}
function loadhesh5(){
    document.cookie = "hashinit="+ "ГЕНОТИП";
    init();
}
function loadhesh6(){
    document.cookie = "hashinit="+ "ФЕНОТИП";
    init();
}
function loadhesh8(){
    document.cookie = "hashinit="+ "МУТАЦИИ";
    init();
}
function loadhesh9(){
    document.cookie = "hashinit="+ "ДНК";
    init();
}
function loadhesh10(){
    document.cookie = "hashinit="+ "КЛЕТКИ";
    init();
}
function loadhesh11(){
    document.cookie = "hashinit="+ "ЯДРО";
    init();
}
function loadhesh12(){
    document.cookie = "hashinit="+ "НАСЛЕДОВАНИЕ";
    init();
}

$(document).ready(function () {
    init();
    init2();

    $('#hesh2').on('click', loadhesh2); 
    $('#hesh3').on('click', loadhesh3); 
    $('#hesh4').on('click', loadhesh4); 
    $('#hesh5').on('click', loadhesh5); 
    $('#hesh6').on('click', loadhesh6); 
    $('#hesh8').on('click', loadhesh8); 
    $('#hesh9').on('click', loadhesh9); 
    $('#hesh10').on('click', loadhesh10); 
    $('#hesh11').on('click', loadhesh11); 
    $('#hesh12').on('click', loadhesh12);  
});
