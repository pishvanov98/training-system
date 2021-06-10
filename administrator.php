<?php 
if (!$_SESSION ['authu'])
{
  header("Location: index.html"); /* Перенаправление броузера */
}
        require 'db.php';
    ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GENETIX</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/sweet-alert.css">
</head>
<body>
  <header>
  <a href="index.html"><img src="img/logo.png" alt="Логотип" width="36px" height="105px"></a>
  <div id="name_authu_admin"><?php echo $_COOKIE["name_authu"];?></div>
  <a href="user_logout.php" id="exit_admin"><span></span></a>
  </header>

  <div id="content_admin">

  <div class="email-field">
        <div class="out"></div>
        <textarea  placeholder="ТЕМА" class="textbox" id="gtema"></textarea><!--tema --> 
        <textarea  placeholder="ИЗОБРАЖЕНИЯ НА ГЛАВНОЙ СТРАНИЦЕ" class="textbox" id="gimg_glav"></textarea><!--img_glav -->
        <textarea  placeholder="КЛАСС" class="textbox" id="gklass"></textarea><!--klass -->
        <textarea  placeholder="ИЗОБРАЖЕНИЕ НАД ИЗОБРАЖЕНИЕМ УЧЁНОГО" class="textbox" id="gtext_top_img"></textarea><!--text_top_img -->
        <textarea  placeholder="ИЗОБРАЖЕНИЯ УЧЁНОГО" class="textbox" id="gimg_scientist"></textarea><!--img_scientist -->
        <textarea  placeholder="ГОДЫ ЖИЗНИ УЧЁНОГО" class="textbox" id="gyear"></textarea><!--year -->
        <textarea placeholder="ОПИСАНИЕ ТЕМЫ" class="message" id="gdescription"></textarea><!--description -->
        <textarea placeholder="ОПИСАНИЕ ТЕМЫ" class="message" id="gdescription2"></textarea><!--description2 -->
        <textarea placeholder="ЗАГОЛОВОК НАД ИЗОБРАЖЕНИЕМ" class="message" id="gtop_text_img"></textarea><!--top_text_img -->
        <textarea  placeholder="ЦЕНТРАЛЬНОЕ ИЗОБРАЖЕНИЕ" class="textbox" id="gimg1"></textarea><!--img1 -->
        <textarea  placeholder="ИЗОБРАЖЕНИЕ" class="textbox" id="gimg2"></textarea><!--img2 -->
        <textarea placeholder="ОПИСАНИЕ ТЕМЫ" class="message" id="gdescription3"></textarea><!--description3 -->
        <textarea placeholder="ИЗОБРАЖЕНИЕ" class="message" id="gdescription4"></textarea><!--description4 -->
        <textarea placeholder="ОПИСАНИЕ ТЕМЫ" class="message" id="gdescription5"></textarea><!--description5 -->
        <textarea  placeholder="ХЕШТЕГ ТЕМЫ" class="textbox" id="ghash"></textarea><!--hash -->
        <textarea  placeholder="ХЕШТЕГ ТЕМЫ" class="textbox" id="ghash2"></textarea><!--hash2 -->
        <textarea  placeholder="ХЕШТЕГ ТЕМЫ" class="textbox" id="ghash3"></textarea><!--hash3 -->
        <h3>ТЕСТЫ ТЕМЫ</h3>
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №1" class="textbox" id="gcondition_test1"></textarea><!--condition_test1 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer1"></textarea><!--correct_answer1 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer1"></textarea><!--not_correct_answer1 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer1"></textarea><!--not_correct2_answer1 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer1"></textarea><!--not_correct3_answer1 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №2" class="textbox" id="gcondition_test2"></textarea><!--condition_test2 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer2"></textarea><!--correct_answer2 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer2"></textarea><!--not_correct_answer2 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer2"></textarea><!--not_correct2_answer2 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer2"></textarea><!--not_correct3_answer2 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №3" class="textbox" id="gcondition_test3"></textarea><!--condition_test3 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer3"></textarea><!--correct_answer3 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer3"></textarea><!--not_correct_answer3 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer3"></textarea><!--not_correct2_answer3 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer3"></textarea><!--not_correct3_answer3 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №4" class="textbox" id="gcondition_test4"></textarea><!--condition_test4 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer4"></textarea><!--correct_answer4 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer4"></textarea><!--not_correct_answer4 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer4"></textarea><!--not_correct2_answer4 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer4"></textarea><!--not_correct3_answer4 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №5" class="textbox" id="gcondition_test5"></textarea><!--condition_test5 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer5"></textarea><!--correct_answer5 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer5"></textarea><!--not_correct_answer5 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer5"></textarea><!--not_correct2_answer5 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer5"></textarea><!--not_correct3_answer5 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №6" class="textbox" id="gcondition_test6"></textarea><!--condition_test6 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer6"></textarea><!--correct_answer6 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer6"></textarea><!--not_correct_answer6 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer6"></textarea><!--not_correct2_answer6 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer6"></textarea><!--not_correct3_answer6 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №7" class="textbox" id="gcondition_test7"></textarea><!--condition_test7 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer7"></textarea><!--correct_answer7 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer7"></textarea><!--not_correct_answer7 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer7"></textarea><!--not_correct2_answer7 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer7"></textarea><!--not_correct3_answer7 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №8" class="textbox" id="gcondition_test8"></textarea><!--condition_test8 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer8"></textarea><!--correct_answer8 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer8"></textarea><!--not_correct_answer8 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer8"></textarea><!--not_correct2_answer8 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer8"></textarea><!--not_correct3_answer8 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №9" class="textbox" id="gcondition_test9"></textarea><!--condition_test9 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer9"></textarea><!--correct_answer9 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer9"></textarea><!--not_correct_answer9 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer9"></textarea><!--not_correct2_answer9 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer9"></textarea><!--not_correct3_answer9 -->
        <textarea  placeholder="УСЛОВИЕ ТЕСТА №10" class="textbox" id="gcondition_test10"></textarea><!--condition_test10 -->
        <textarea  placeholder="ПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gcorrect_answer10"></textarea><!--correct_answer10 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct_answer10"></textarea><!--not_correct_answer10 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct2_answer10"></textarea><!--not_correct2_answer10 -->
        <textarea  placeholder="НЕПРАВИЛЬНЫЙ ОТВЕТ" class="textbox" id="gnot_correct3_answer10"></textarea><!--not_correct3_answer10 -->
        <h3>ПРАКТИЧЕСКОЕ ЗАДАНИЕ</h3>
        <textarea  placeholder="УСЛОВИЕ ЗАДАНИЯ" class="textbox" id="gcondition_praktika"></textarea><!--condition_praktika -->
        <textarea  placeholder="ТЕКСТ РЯДОМ С ОТВЕТОМ" class="textbox" id="gtext_praktika"></textarea><!--text_praktika -->
        <textarea placeholder="ОТВЕТ НА ЗАДАНИЕ" class="textbox" id="gcorrect_praktika"></textarea><!--correct_praktika -->
        <input type="hidden" id="gid">
        <div id="button_admin">
        <button class="add-to-db" style="cursor:pointer">ДОБАВИТЬ ТЕМУ</button>
        <button id="delit" class="del-to-db" style="cursor:pointer">УДАЛИТЬ ТЕМУ</button>
        </div>
      </div>

<script>
var tx = document.getElementsByTagName('textarea');//РАСТЯГИВАЕМ_textarea

for (var i = 0; i < tx.length; i++) {

tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');

tx[i].addEventListener("input", OnInput, false);

}

function OnInput() {

this.style.height = 'auto';

this.style.height = (this.scrollHeight) + 'px';//////console.log(this.scrollHeight);

}
</script>

  </div>
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/admin.js"></script>
  <script src="js/sweet-alert.min.js"></script>
</body>
</html>