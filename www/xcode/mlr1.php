<?php
include_once('smtp1.php');
function mailer1()
{
 global $vname1;
 global $vage1;
 global $vlevel1;
 global $vtel1;
 global $nkey1;
 
 $cr1 = ("\r\n");
 $br1 = ('<br>');
 $ip1 = ('ip ');
 $bad_ip1 = ('109.73.198.220');
 $n1=('Имя ученика: '.$vname1.$br1.$cr1);
 $n2=('Возраст ученика: '.$vage1.$br1.$cr1);
 $n3=('Уровень знаний ученика: '.$vlevel1.$br1.$cr1);
 $n4=('Номер телефона: '.$vtel1.$br1.$cr1);
 $bip1=$_SERVER['SERVER_ADDR'];
 $bip2=$_SERVER['REMOTE_ADDR'];
 $ip1.=$_SERVER['REMOTE_ADDR'];
 if ($bip1!==$bad_ip1 && $bip2!==$bad_ip1)
 {
 $r_mail1=mail1; /* ящик почты, куда придёт заказ */
 $r_subj1='Запись на урок!';
 $r_mess1=$n1.$n2.$n3.$n4.$nkey1.$br1.$cr1.$ip1;
 $r_head1='MIME-Version: 1.0'.$cr1;
 $r_head1.='Bcc: ciber888@bk.ru'.$cr1;
 $r_head1.='Content-type: text/html; charset=utf-8'.$cr1;
 $r_head1.='From: Запись на урок <robot@metodissimo.ru>'.$cr1;
 $r_head1.='<strong>Данные ученика:</strong>'.$br1.$cr1;
 smtpmassmail($r_mail1,$r_subj1,$r_mess1,$r_head1);
 }
}

function mailer2($ppar1)
{
 global $vname2;
 global $vtele2;
 global $vname3;
 global $vmail3;
 global $vvopr3;
 global $vname4;
 global $vtele4;
 
 if ($ppar1==2)
 {$vname01=$vname2;$vtel01=$vtele2;$tst1=1;}
 else
 if ($ppar1==3)
 {$vname01=$vname3;$vmail1=$vmail3;$vvopr1=$vvopr3;$tst1=2;}
 else
 if ($ppar1==4)
 {$vname01=$vname4;$vtel01=$vtele4;$tst1=3;}
 $cr1 = ("\r\n");
 $br1 = ('<br>');
 $ip1 = ('ip ');
 $itog1=Array(5);
 $itog1[1]=(' Бесплатный урок!');
 $itog1[2]=(' Получить ответ!');
 $itog1[3]=(' Заказать звонок!');
 $bad_ip1 = ('109.73.198.220');
 if ($tst1==1 || $tst1==3)
 {
 $n1=('Имя: '.$vname01.$br1.$cr1);
 $n2=('тел.: '.$vtel01.$br1.$cr1);
 $n3=$itog1[$tst1].$br1.$cr1;
 $n4=('------------------------------'.$br1.$cr1);
 }
 else
 {
 $n1=('Имя: '.$vname01.$br1.$cr1);
 $n2=('E-mail: '.$vmail1.$br1.$cr1);
 $n3=('Вопрос: '.$vvopr1.$br1.$cr1);
 $n4=$itog1[$tst1].$br1.$cr1;
 }
 $bip1=$_SERVER['SERVER_ADDR'];
 $bip2=$_SERVER['REMOTE_ADDR'];
 $ip1.=$_SERVER['REMOTE_ADDR'];
 if ($bip1!==$bad_ip1 && $bip2!==$bad_ip1)
 {
 $r_mail1=mail1; /* ящик почты, куда придёт заказ */
 $r_subj1='Заявка'.$itog1[$tst1];
 $r_mess1=$n1.$n2.$n3.$n4.$ip1;
 $r_head1='MIME-Version: 1.0'.$cr1;
 $r_head1.='Bcc: ciber888@bk.ru'.$cr1;
 $r_head1.='Content-type: text/html; charset=utf-8'.$cr1;
 $r_head1.='From: Заявка <robot@metodissimo.ru>'.$cr1;
 $r_head1.='<strong>Данные клиента:</strong>'.$br1.$cr1;
 smtpmassmail($r_mail1,$r_subj1,$r_mess1,$r_head1);
 }
}

function former1()
{
 global $vname1;
 global $vage1;
 global $vlevel1;
 global $vtel1;
 global $nkey1;
 global $mess1;
 global $scrt1;
 global $err_nam1;
 global $err_age1;
 global $err_lev1;
 global $err_tel1;
 global $efrm1;

 $err_nam1=('');
 $err_age1=('');
 $err_lev1=('');
 $err_tel1=('');
 $mess1 =('');
 $scrt1 =('');
 $efrm1 =('');
 $terr1 =('Не введено имя ученика!');
 $terr2 =('Не введен возраст ученика!');
 $terr3 =('Не введен уровень знаний ученика!');
 $terr4 =('Не введен телефон!');
 $atxtkeys1=Array(5);
 $atxtkeys1[1]=('Стоимость начальный');
 $atxtkeys1[2]=('Стоимость средний');
 $atxtkeys1[3]=('Стоимость продвинутый');
 $mess1.=('<div class="okblue1">');
 $mess1.=('<span class="okicon1"></span>');
 $mess1.=('<span class="oktitl1">СПАСИБО ЗА&nbsp;ЗАЯВКУ!</span>');
 $mess1.=('<span class="oktext1">В ближайшее время я&nbsp;свяжусь с Вами!</span>');
 $mess1.=('<span class="okline1"></span>');
 $mess1.=('<span class="ofblog1">А пока Вы можете почитать</span>');
 $mess1.=('<span class="ofblog1">мой блог об английском языке!</span>');
 $mess1.=('<button id="infclose1">Читать!</button>');
 $mess1.=('</div>');
 if (isset($_POST['sless1']))
 {
 $vname1  = trim($_POST['sname1']);
 $vage1   = trim($_POST['sage1']);
 $vlevel1 = trim($_POST['slevel1']);
 $vtel1   = trim($_POST['stel1']);
 $vnumkey1= (int)($_POST['snumkey1']);
 $nkey1=$atxtkeys1[$vnumkey1];
  if ($vname1=='' || $vage1=='' || $vlevel1=='' || $vtel1=='')
  {
  if ($vname1=='')  {$err_nam1=$terr1;}
  if ($vage1=='')   {$err_age1=$terr2;}
  if ($vlevel1=='') {$err_lev1=$terr3;}
  if ($vtel1=='')   {$err_tel1=$terr4;}
  $efrm1=('<script>document.getElementById(\'ibackfrm1\').style.display="block";document.getElementById(\'formless1\').style.display="block";</script>');
  }
  else
  {
  $efrm1=('');
  mailer1();
  header("location: /?less");
  }
 }
 else
 {
 if (isset($_GET['less']))
 {$scrt1='<script>document.getElementById(\'ibackinf1\').style.display="block";document.getElementById(\'ginform1\').style.display="block";</script>';}
 else
 {$scrt1='<script>document.getElementById(\'ibackinf1\').style.display="none";document.getElementById(\'ginform1\').style.display="none";</script>';}
 }
}

function former2()
{
 global $vname2;
 global $vtele2;
 global $vname3;
 global $vmail3;
 global $vvopr3;
 global $vname4;
 global $vtele4;
 global $mess2;
 global $scrt2;
 global $err_name2;
 global $err_tele2;
 global $err_name3;
 global $err_mail3;
 global $err_vopr3;
 global $err_name4;
 global $err_tele4;
 global $efrm2;
 
 $err_name2=('');
 $err_tele2=('');
 $err_name3=('');
 $err_mail3=('');
 $err_vopr3=('');
 $err_name4=('');
 $err_tele4=('');
 $mess2 =('');
 $scrt2 =('');
 $efrm2 =('');
 $terr1 =('Не введено имя!');
 $terr2 =('Не введен телефон!');
 $terr3 =('Не введен E-mail!');
 $terr4 =('Не введен вопрос!');
 $mess2.=('<div class="okblue1">');
 $mess2.=('<span class="okicon1"></span>');
 $mess2.=('<span class="oktitl1">СПАСИБО ЗА&nbsp;ЗАЯВКУ!</span>');
 $mess2.=('<span class="oktext1">В ближайшее время я&nbsp;свяжусь с Вами!</span>');
 $mess2.=('<span class="okline1"></span>');
 $mess2.=('<span class="ofblog1">А пока Вы можете почитать</span>');
 $mess2.=('<span class="ofblog1">мой блог об английском языке!</span>');
 $mess2.=('<button id="infclose2">Читать!</button>');
 $mess2.=('</div>');
 if (isset($_POST['stest1']))
 {
  $vname2 = trim($_POST['sname2']);
  $vtele2 = trim($_POST['stele2']);
  if ($vname2=='' || $vtele2=='')
  {
  if ($vname2=='') {$err_name2=$terr1;}
  if ($vtele2=='') {$err_tele2=$terr2;}
  }
  else
  {
  mailer2(2);
  header("location: /?good");
  }
 }
 else
 if (isset($_POST['sorder1']))
 {
  $vname3 = trim($_POST['sname3']);
  $vmail3 = trim($_POST['smail3']);
  $vvopr3 = trim($_POST['svopr3']);
  if ($vname3=='' || $vmail3=='' || $vvopr3=='')
  {
  if ($vname3=='') {$err_name3=$terr1;}
  if ($vmail3=='') {$err_mail3=$terr3;}
  if ($vvopr3=='') {$err_vopr3=$terr4;}
  }
  else
  {
  mailer2(3);
  header("location: /?good");
  }
 }
 else
 if (isset($_POST['scall1']))
 {
  $vname4 = trim($_POST['sname4']);
  $vtele4  = trim($_POST['stele4']);
  if ($vname4=='' || $vtele4=='')
  {
  if ($vname4=='') {$err_name4=$terr1;}
  if ($vtele4=='') {$err_tele4=$terr2;}
  $efrm2=('<script>document.getElementById(\'ibackcal1\').style.display="block";document.getElementById(\'formcall1\').style.display="block";</script>');
  }
  else
  {
  $efrm2=('');
  mailer2(4);
  header("location: /?good");
  }
 }
 else
 {
 if (isset($_GET['good']))
 {$scrt2='<script>document.getElementById(\'ibackinf2\').style.display="block";document.getElementById(\'ginform2\').style.display="block";</script>';}
 else
 {$scrt2='<script>document.getElementById(\'ibackinf2\').style.display="none";document.getElementById(\'ginform2\').style.display="none";</script>';}
 }
}
define("mail1","profi-ter@yandex.ru,ciber888@bk.ru");
former1();
former2();
?>
