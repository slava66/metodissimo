<!--
vnul1=0;
vstep1=20;
vstep2=-20;
vsteps1=0;
vstat1=0;
action1=8;
count1=0;
position1=0;
reload1=0;
ascroll1=Array(10);
d1=document;

function retset1(){reload1=1;}

function gokeytop1()
{
 var step1=-100;
 tstep1+=step1;
 if (tstep1>0)
 {window.scrollBy(vnul1,step1);}
 else
 {window.scrollTo(vnul1,vnul1);vstat1=0;clearInterval(gtop1);}
}

function settop1()
{
 tstep1=d1.body.scrollTop || d1.documentElement.scrollTop || 0;
 if (vstat1==0) {vstat1=1;gtop1=setInterval("gokeytop1()",50);}
}

function scroller1()
{
 var top1;
 top1=d1.body.scrollTop || d1.documentElement.scrollTop || 0;
 if (top1>2500)
 {d1.getElementById('ikeytop1').style.display="block";}
 else
 {d1.getElementById('ikeytop1').style.display="none";}
}

function scrollbot1()
{
 top1=d1.body.scrollTop || d1.documentElement.scrollTop || 0;
 count1+=vsteps1;
 if (top1>=position1)
 {itog1=(top1-position1);vsteps1=itog1;}
 window.scrollBy(vnul1,vsteps1);
 if (top1>=position1 || count1>=position1)
 {count1=0;action1=8;clearInterval(se1);}
}

function scrolltop1()
{
 top1=d1.body.scrollTop || d1.documentElement.scrollTop || 0;
 count1+=vsteps1;
 if (top1<=position1)
 {itog1=(position1-top1);vsteps1=itog1;}
 window.scrollBy(vnul1,vsteps1);
 if (top1<=position1)
 {count1=0;action1=8;clearInterval(se1);}
}

function start1(par1)
{
 var voffset1=60;
 var ahig1=Array(10);
 top1=d1.body.scrollTop || d1.documentElement.scrollTop || 0;
 bot1=d1.body.scrollHeight || d1.documentElement.scrollHeight;
 ahig1[0]=d1.getElementById('ihead1').scrollHeight || getElementById('ihead1').clientHeight;
 ahig1[1]=d1.getElementById('ifromme1').scrollHeight || getElementById('ifromme1').clientHeight;
 ahig1[2]=d1.getElementById('imethod1').scrollHeight || getElementById('imethod1').clientHeight;
 ahig1[3]=d1.getElementById('ireview1').scrollHeight || getElementById('ireview1').clientHeight; 
 ahig1[4]=d1.getElementById('istudents1').scrollHeight || getElementById('istudents1').clientHeight;
 ahig1[5]=d1.getElementById('iprice1').scrollHeight || getElementById('iprice1').clientHeight;
 ahig1[6]=d1.getElementById('icontacts1').scrollHeight || getElementById('icontacts1').clientHeight;
 ascroll1[1]=((ahig1[0])-voffset1);
 ascroll1[2]=((ahig1[0]+ahig1[1])-voffset1);
 ascroll1[3]=((ahig1[0]+ahig1[1]+ahig1[2])-voffset1);
 ascroll1[4]=((ahig1[0]+ahig1[1]+ahig1[2]+ahig1[3])-voffset1);
 ascroll1[5]=((ahig1[0]+ahig1[1]+ahig1[2]+ahig1[3]+ahig1[4])-voffset1);
 ascroll1[6]=((ahig1[0]+ahig1[1]+ahig1[2]+ahig1[3]+ahig1[4]+ahig1[5])-voffset1);
 position1=ascroll1[par1];
 if (action1==8)
 {
 if (top1<=position1)
 {action1=1;vsteps1=vstep1;se1=setInterval('scrollbot1()',4);}
 else
 {action1=1;vsteps1=vstep2;se1=setInterval('scrolltop1()',4);}
 }
}

function open_call1()
{
 retset1();
 d1.getElementById('ierrname4').innerHTML='';
 d1.getElementById('ierrtele4').innerHTML='';
 d1.getElementById('iname4').value='';
 d1.getElementById('itele4').value='';
 d1.getElementById('ibackcal1').style.display="block";
 d1.getElementById('formcall1').style.display="block";
}

function hide_call1()
{
 d1.getElementById('formcall1').style.display="none";
 d1.getElementById('ibackcal1').style.display="none";
}

function open_form1(par1,par2)
{
 var levels1=Array(5);
 levels1[0] = '';
 levels1[1] = 'НАЧИНАЮЩИЙ';
 levels1[2] = 'СРЕДНИЙ';
 levels1[3] = 'ПРОДВИНУТЫЙ';
 retset1();
 d1.getElementById('ierrnam1').innerHTML='';
 d1.getElementById('ierrage1').innerHTML='';
 d1.getElementById('ierrlev1').innerHTML='';
 d1.getElementById('ierrtel1').innerHTML='';
 d1.getElementById('iname1').value='';
 d1.getElementById('iage1').value='';
 d1.getElementById('ilevel1').value=levels1[par1];
 d1.getElementById('itel1').value='';
 d1.getElementById('inumkey1').value=par2;
 d1.getElementById('ibackfrm1').style.display="block";
 d1.getElementById('formless1').style.display="block";
}

function hide_form1()
{
 d1.getElementById('formless1').style.display="none";
 d1.getElementById('ibackfrm1').style.display="none";
}

function open_video1(pvid1)
{
 avid1=Array(8);
 avid1[1]=('<iframe class="yvideo2" src="https://www.youtube.com/embed/VGQYna6K1Uw?feature=player_detailpage&amp;autohide=1&amp;showinfo=0" allowfullscreen></iframe>');
 avid1[2]=('<iframe class="yvideo2" src="https://www.youtube.com/embed/88Ii6tn5BEg?feature=player_detailpage&amp;autohide=1&amp;showinfo=0" allowfullscreen></iframe>');
 avid1[3]=('<iframe class="yvideo2" src="https://www.youtube.com/embed/O-ELMNZlDXM?feature=player_detailpage&amp;autohide=1&amp;showinfo=0" allowfullscreen></iframe>');
 avid1[4]=('<iframe class="yvideo2" src="https://www.youtube.com/embed/hjCvQrXl84w?feature=player_detailpage&amp;autohide=1&amp;showinfo=0" allowfullscreen></iframe>');
 avid1[5]=('<iframe class="yvideo2" src="https://www.youtube.com/embed/fXjvRZScnvE?feature=player_detailpage&amp;autohide=1&amp;showinfo=0" allowfullscreen></iframe>');
 d1.getElementById('blockvideo1').innerHTML=avid1[pvid1];
 d1.getElementById('ibackvid1').style.display="block";
 d1.getElementById('istudvid1').style.display="block";
}

function hide_video1()
{
 d1.getElementById('ibackvid1').style.display="none";
 d1.getElementById('istudvid1').style.display="none";
}

function open_politics1()
{
 d1.getElementById('ibackpol1').style.display="block";
 d1.getElementById('fpolitic1').style.display="block";
}

function hide_politics1()
{
 d1.getElementById('ibackpol1').style.display="none";
 d1.getElementById('fpolitic1').style.display="none";
}

function closeinfo1()
{
 retset1();
 d1.getElementById('ibackinf1').style.display="none";
 d1.getElementById('ginform1').style.display="none";
 d1.location='http://metodissimo.ru/blog';
}

function closeinfo2()
{
 retset1();
 d1.getElementById('ibackinf2').style.display="none";
 d1.getElementById('ginform2').style.display="none";
 d1.location='http://metodissimo.ru/blog';
}

function whereExit(e)
{
 e = e || window.event;
 var msg1 = 'Вы записались на БЕСПЛАТНЫЙ пробный урок?';
 var msg2 = 'Вы записались на БЕСПЛАТНЫЙ пробный урок? Внизу страницы ссылка на мой блог - приятного чтения!';
 // For IE and Firefox prior to version 4
 if (reload1==0)
 {
 if (e)
 {e.returnValue = msg1;}
 return msg1;
 }
}

/* window.onbeforeunload=whereExit; */
window.onscroll=scroller1;
d1.getElementById('ikeytop1').onclick=settop1;
d1.getElementById('ikeycall1').onclick=open_call1;
d1.getElementById('keyorder1').onclick=function(){open_form1(1,1);}
d1.getElementById('keyorder2').onclick=function(){open_form1(2,2);}
d1.getElementById('keyorder3').onclick=function(){open_form1(3,3);}
d1.getElementById('ivideo1').onclick=function(){open_video1(1);}
d1.getElementById('ivideo2').onclick=function(){open_video1(2);}
d1.getElementById('ivideo3').onclick=function(){open_video1(3);}
d1.getElementById('ivideo4').onclick=function(){open_video1(4);}
d1.getElementById('ivideo5').onclick=function(){open_video1(5);}
d1.getElementById('callclose1').onclick=hide_call1;
d1.getElementById('ibackcal1').onclick=hide_call1;
d1.getElementById('formclose1').onclick=hide_form1;
d1.getElementById('ibackfrm1').onclick=hide_form1;
d1.getElementById('closevideo1').onclick=hide_video1;
d1.getElementById('ibackvid1').onclick=hide_video1;
d1.getElementById('callpolit1').onclick=open_politics1;
d1.getElementById('closepolitic1').onclick=hide_politics1;
d1.getElementById('ibackpol1').onclick=hide_politics1;
d1.getElementById('infclose1').onclick=closeinfo1;
d1.getElementById('ibackinf1').onclick=closeinfo1;
d1.getElementById('infclose2').onclick=closeinfo2;
d1.getElementById('ibackinf2').onclick=closeinfo2;
//-->