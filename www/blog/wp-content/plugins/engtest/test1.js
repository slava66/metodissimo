<!--
d1=document;
p1=0;
sum1=0;
form1='';
err1=0;

function test_email1()
{
  var errmess1    = '';
  var mess_email1 = 'Ошибка. Не введён E-mail !';
  var mess_email2 = 'Ошибка. Не корректный E-mail !';
  var mess_email3 = 'Ошибка. E-mail содержит пробел(ы) !';
  var bemail1=!mailform1.imail1.value;
  var bemail2=mailform1.imail1.value.indexOf('@');
  var bemail3=mailform1.imail1.value.indexOf(' ');

 if (bemail1 || bemail2==-1 || bemail3!==-1)
 {
  if (bemail1) {errmess1=mess_email1;}
  else
  if (bemail2==-1) {errmess1=mess_email2;}
  else
  if (bemail3!==-1) {errmess1=mess_email3;}
  alert(errmess1);
  return false;
 }
  return true;
}

function set_test1()
{
result1=Array(9);
vop1=Array(9);
img1=Array(9);
img1[1]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v1.jpg">';
img1[2]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v2.jpg">';
img1[3]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v3.jpg">';
img1[4]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v4.jpg">';
img1[5]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v5.jpg">';
img1[6]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v6.jpg">';
img1[7]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v7.jpg">';
img1[8]='<img id="iphoto1" class="img1" src="/blog/wp-content/plugins/engtest/img1/v8.jpg">';
vop1[1]='Я хотел(а) бы иметь более высокую заработную плату.';
vop1[2]='Профессиональное развитие в моей сфере деятельности связано с владением иностранным языком.';
vop1[3]='Мне нравится знакомиться и общаться с иностранцами.';
vop1[4]='Я люблю посещать новые страны, отдыхать заграницей.';
vop1[5]='Мне важно, чтобы обо мне думали как об образованном человеке с широким кругозором.';
vop1[6]='Я хотел(а) бы создать семью с иностранцем / иностранкой.';
vop1[7]='Очень хочу уехать жить / учиться заграницу!';
vop1[8]='Уверен(а), что смотреть фильмы, читать книги, журналы и газеты «в оригинале» гораздо интереснее.\r\n';
bsp1='<span class="blockkeys1">';
bsp2='</span>';
yes1='<span id="yes1" class="key2" onclick="go_yes1();"><img class="ikey1" src="/blog/wp-content/plugins/engtest/img1/yes1.png"><span class="k1">Да!</span></span>\r\n';
not1='<span id="not1" class="key3" onclick="go_not1();"><img class="ikey1" src="/blog/wp-content/plugins/engtest/img1/not1.png"><span class="k1">Нет!</span></span>\r\n';
ws1='<a class="ws1" href="http://webstudion.ts6.ru/" target="_blank" title="Создание сайтов под ключ">King studio</a>\r\n';
br1='<br>\r\n';
vtext1='Вопрос ';
vtext2=' из 8';
title1='Введите E-mail, чтобы получить результат теста!';
form1+='\r\n';
form1+='<form id="mailform1" action="" method="post" onsubmit="return test_email1();">\r\n';
form1+='<div class="dmail1"><img class="iemail1" src="/blog/wp-content/plugins/engtest/img1/email1.jpg">\r\n';
form1+='<input id="imail1" name="email1" type="text" size="40" maxlength="40" value="Ваш E-mail" onclick="clear_mail1();">\r\n';
form1+='<input id="iv1" name="v1" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv2" name="v2" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv3" name="v3" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv4" name="v4" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv5" name="v5" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv6" name="v6" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv7" name="v7" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="iv8" name="v8" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<input id="is1" name="s1" type="hidden" size="1" maxlength="1" readonly="readonly">\r\n';
form1+='<br><button class="keys1" name="sub1" type="submit">Получить результат</button>\r\n';
form1+='</div></form>';
/* d1.getElementById('footer1').innerHTML=ws1; */
 for (i1=0;i1<=8;i1++)
 {
  result1[i1]=0;
 }
}

function go_next1(keys1)
{
 if (p1<8)
 {
 p1++;
 d1.getElementById('vopr1').innerHTML=vop1[p1];
 d1.getElementById('test1').innerHTML=keys1;
 d1.getElementById('count1').innerHTML=vtext1+p1+vtext2;
 d1.getElementById('photos1').innerHTML=img1[p1];
 }
 else
 {
 d1.getElementById('vopr1').innerHTML=title1;
 d1.getElementById('test1').innerHTML=form1;
 for (i1=1;i1<=8;i1++)
 {
 d1.getElementById('iv'+i1).value=result1[i1];
 }
 d1.getElementById('is1').value=sum1;
 d1.getElementById('count1').innerHTML='';
 d1.getElementById('photos1').innerHTML='';
 }
}

function clear_mail1()
{
d1.getElementById('imail1').value='';
}

function go_test1()
{
keys1=bsp1+yes1+not1+bsp2+br1;
go_next1(keys1);
}

function go_yes1()
{
result1[p1]=1;
sum1++;
go_test1();
}

function go_not1()
{
result1[p1]=0;
go_test1();
}
d1.getElementById('start1').onclick=go_test1;
set_test1();
//-->