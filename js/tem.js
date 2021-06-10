var hash = window.location.hash.substring(1);
document.cookie = "id_tem="+ "♣" + hash + "♠";

function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : hash
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
          "action" : "rendomtem"
         
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
          "action" : "loadSingleTem",
          "id" : hash
      },
      temOut3
  );
}
function init4() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : hash
      },
      temOut4
  );
}
function init5() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "loadSingleTem",
          "id" : hash
      },
      temOut5
  );
}

function init6() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "result_user"
      },
      temOut6
  );
}

function temOut(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';

        out +='<div class="teory">';
            out +=`<p class="klass">${data.klass}</p>`;
            out +=`<p class="tema">${data.tema}</p>`;
            out +=`<p class="description">${data.description}</p>`;
            out +=`<img class="text_top_img" src="images/${data.text_top_img}" alt="">`;
            out +=`<img class="img_scientist" src="images/${data.img_scientist}" alt="">`;
            out +=`<p class="year">${data.year}</p>`;
            out +=` <div class="clear"><br></div>`; 
            out +=`<p class="description2">${data.description2}</p>`;
            out +=`<p class="top_text_img">${data.top_text_img}</p>`;
            out +=`<img class="img1" src="images/${data.img1}" alt="">`;
            out +=`<p class="description3">${data.description3}</p>`;
            out +=`<img class="img2" src="images/${data.img2}" alt="">`;
            out +=`<img class="description4" src="images/${data.description4}" alt="">`;
            out +=` <div class="clear"><br></div>`; 
            out +=`<p class="description5">${data.description5}</p>`;
            out +='</div>';
        $('.tem-out-g').html(out);
        document.cookie = "tema="+ "•" + `${data.tema}` + "○";
        $.post(
            "core.php",
            {
                "action" : "newTems_user",
                "tema" : `${data.tema}`
 
            },
        );
        
      }
      else{
          $('.tem-out-g').html('Такой темы не существует');
      }
}
function temOut2(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
            out +=` <div class="button_menu">`; 
            out +=`<a href="test.php">ТЕСТИРОВАНИЕ<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a><a href="praktick.php">ПРАКТИЧЕСКОЕ ЗАДАНИЕ<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a><a href="main.php">НАЗАД<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a><a href="tem_random.php">СЛЕДУЮЩАЯ ТЕМА<img class="img_bottom" src="img/cursor.png" alt="" width="37px" height="37px"></a>`;
            out +='</div>';

        $('.tem-out-g2').html(out);
        document.cookie = "reandom_tema="+  `${data.id}`;
      }
      else{
          $('.tem-out-g2').html('Такой темы не существует');
      }
}

function temOut3(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';

        out +=`<a href="main.php">#${data.hash}</a>`;

        $('.tem-out-g3').html(out);
        document.cookie = "hashteg="+ "◘" + `${data.hash}` + "X"
      }
      else{
          $('.tem-out-g3').html('Такой темы не существует');
      }
}
function temOut4(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
           
        out +=`<a href="main.php">#${data.hash2}</a>`;

        $('.tem-out-g4').html(out);
        document.cookie = "hashteg2="+ "♪" + `${data.hash2}` + "♫"
      }
      else{
          $('.tem-out-g4').html('Такой темы не существует');
      }
}
function temOut5(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
           
        out +=`<a href="main.php">#${data.hash3}</a>`;

        $('.tem-out-g5').html(out);
        document.cookie = "hashteg3="+ "↑" + `${data.hash3}` + "↓"
      }
      else{
          $('.tem-out-g5').html('Такой темы не существует');
      }
}

function temOut6(data) {
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


function loadhesh1(){
    var hashteg = document.cookie;
    var hashteg = hashteg.split('X')[0];
    var hashteg = hashteg.split('').reverse().join('') ;// сделали реверс
    var hashteg = hashteg.split('◘')[0];
    var hashteg = hashteg.split('').reverse().join('') ;// сделали реверс
    document.cookie = "hashinit=" + hashteg;
    setTimeout(function(){
        document.cookie = "hashinit=" + hashteg;
    }, 500);
}
function loadhesh2(){
    var hashteg2 = document.cookie;
    var hashteg2 = hashteg2.split('♫')[0];
    var hashteg2 = hashteg2.split('').reverse().join('') ;// сделали реверс
    var hashteg2 = hashteg2.split('♪')[0];
    var hashteg2 = hashteg2.split('').reverse().join('') ;// сделали реверс
    document.cookie = "hashinit="+ hashteg2;
    setTimeout(function(){
        document.cookie = "hashinit="+ hashteg2;
    }, 500);
}
function loadhesh3(){
    var hashteg3 = document.cookie;
    var hashteg3 = hashteg3.split('↓')[0];
    var hashteg3 = hashteg3.split('').reverse().join('') ;// сделали реверс
    var hashteg3 = hashteg3.split('↑')[0];
    var hashteg3 = hashteg3.split('').reverse().join('') ;// сделали реверс
    document.cookie = "hashinit="+ hashteg3;
    setTimeout(function(){
        document.cookie = "hashinit="+ hashteg3;
    }, 500);
}

$(document).ready(function () {
    init();
    init2();
    init3();
    init4();
    init5();
    init6();
    $('.hash').on('click', loadhesh1);
    $('.hash2').on('click', loadhesh2);
    $('.hash3').on('click', loadhesh3);
});
