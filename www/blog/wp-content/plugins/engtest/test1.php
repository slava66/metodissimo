<?php
/*
Plugin Name: English Test
Plugin URI: http://webstudion.ts6.ru/
Description: Test know the English language.
Version: 1.1.1
Author: Vladimir King
Author URI: http://webstudion.ts6.ru/
*/
include_once($_SERVER['DOCUMENT_ROOT'].'/xcode/smtp1.php');
function result1()
{
 global $email1;
 global $sum1;
 global $ip1;
 global $res1;

 $atext1    = array(3);
 $acall1    = array(3);
 $res1      = array(9);
 $cr1 = ("\r\n");
 $atext1[1] = '"Спасибо! В ближайшее время вы получите результат теста на свой E-mail !"';
 $acall1[1] = 'Результат теста!';
 $acall1[2] = '';
 $acall1[2].='MIME-Version: 1.0'.$cr1;
 $acall1[2].='Content-type: text/html; charset=utf-8'.$cr1;
 $acall1[2].='From: English Test <robot@metodissimo.ru>'.$cr1;
 $acall1[2].='<strong>Данные теста:</strong>'.$br1.$cr1;

 @$email1 = trim($_POST['email1']);
 @$res1[1]= $_POST['v1'];
 @$res1[2]= $_POST['v2'];
 @$res1[3]= $_POST['v3'];
 @$res1[4]= $_POST['v4'];
 @$res1[5]= $_POST['v5'];
 @$res1[6]= $_POST['v6'];
 @$res1[7]= $_POST['v7'];
 @$res1[8]= $_POST['v8'];
 @$sum1   = $_POST['s1'];
 @$ip1    = $_SERVER['REMOTE_ADDR'];
 if (isset($_POST['email1']) && isset($_POST['s1']) && $_POST['email1']!='' && $_POST['s1']!='')
 {
 f_mail1($acall1[1],$acall1[2]);
 echo('<script>alert('.$atext1[1].');</script>');
 }
}

function f_mail1($par1,$par2)
{
 global $email1;
 global $sum1;
 global $ip1;
 global $res1;

 $p1=0;
 $otv1='';
 $br1='<br>';
 $r_mail1=mail1;
 $r_subj1=$par1;
 for ($i1=1;$i1<=8;$i1++)
 {
  $p1++;
  if ($res1[$p1]==='1')
  {$otv1.=' '.$p1.'.'.'Да |';}
  else
  if ($res1[$p1]==='0')
  {$otv1.=' '.$p1.'.'.'Нет |';}
 }
 $r_mess1=$br1.'E-mail: '.$email1.$br1.'Ответы: '.$otv1.$br1.'Сумма: '.$sum1.$br1.'ip: '.$ip1;
 $r_head1=$par2;
 smtpmassmail($r_mail1,$r_subj1,$r_mess1,$r_head1);
}
function set_style()
{
 result1();
 echo('<link rel="stylesheet" href="'.plugins_url('engtest/css/vmain1.css').'" type="text/css">');
}
function set_script()
{
 echo('<script src="'.plugins_url('engtest/test1.js').'" type="text/javascript"></script>');
}
define("mail1","profi-ter@yandex.ru,ciber888@bk.ru");
add_action('wp_head','set_style');
add_action('wp_footer','set_script');
?>