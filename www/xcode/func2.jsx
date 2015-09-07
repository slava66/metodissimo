<!--
vnul1=0;
vstep1=20;
vstep2=-20;
vsteps1=20;
count1=0;
d1=document;
function scroller1(par1)
{
 var ascroll1=Array(10);
 var ahig1=Array(10);
 window.scrollBy(vnul1,vsteps1);
 count1+=vsteps1;
 top1=d1.body.scrollTop || d1.documentElement.scrollTop;
 bot1=d1.body.scrollHeight || d1.documentElement.scrollHeight;
 ahig1[0]=d1.getElementById('ihead1').scrollHeight || getElementById('ihead1').clientHeight;
 ahig1[1]=d1.getElementById('ifromme1').scrollHeight || getElementById('ifromme1').clientHeight;
 ahig1[2]=d1.getElementById('imethod1').scrollHeight || getElementById('imethod1').clientHeight;
 ahig1[3]=d1.getElementById('istudents1').scrollHeight || getElementById('istudents1').clientHeight;
 ahig1[4]=d1.getElementById('iprice1').scrollHeight || getElementById('iprice1').clientHeight;
 ahig1[5]=d1.getElementById('istart1').scrollHeight || getElementById('istart1').clientHeight;
 ahig1[6]=d1.getElementById('icontacts1').scrollHeight || getElementById('icontacts1').clientHeight;
 ascroll1[1]=((ahig1[0])-90);
 ascroll1[2]=((ahig1[0]+ahig1[1])-90);
 ascroll1[3]=((ahig1[0]+ahig1[1]+ahig1[2])-90);
 ascroll1[4]=((ahig1[0]+ahig1[1]+ahig1[2]+ahig1[3])-90);
 ascroll1[5]=((ahig1[0]+ahig1[1]+ahig1[2]+ahig1[3]+ahig1[4])-90);
 ascroll1[6]=((ahig1[0]+ahig1[1]+ahig1[2]+ahig1[3]+ahig1[4]+ahig1[5])-90);
 position1=ascroll1[par1];
 if (top1>=position1 || count1>=position1)
 {count1=0;clearInterval(se1);}
}

function start1(par1)
{
 se1=setInterval('scroller1('+par1+')',4);
}

function open_form1(par1,par2)
{
 var levels1=Array(8);
 levels1[0] = '';
 levels1[1] = 'Начинающий';
 levels1[2] = 'Продолжающий';
 levels1[3] = 'Совершенствующийся';
 levels1[4] = 'Готов к экзаменам';
 levels1[5] = 'Специалист';
 
 d1.getElementById('ierrnam1').innerHTML='';
 d1.getElementById('ierrage1').innerHTML='';
 d1.getElementById('ierrlev1').innerHTML='';
 d1.getElementById('ierrtel1').innerHTML='';
 d1.getElementById('iname1').value='';
 d1.getElementById('iage1').value='';
 d1.getElementById('ilevel1').value=levels1[par1];
 d1.getElementById('itel1').value='';
 d1.getElementById('inumkey1').value=par2;
 d1.getElementById('ibacker1').style.display="block";
 d1.getElementById('formless1').style.display="block";
}

function hide_form1()
{
 d1.getElementById('formless1').style.display="none";
 d1.getElementById('ibacker1').style.display="none";
}

function closeinfo1()
{
 d1.getElementById('ibacker2').style.display="none";
 d1.getElementById('ginform1').style.display="none";
}
d1.getElementById('golesson1').onclick=function(){open_form1(0,6);}
d1.getElementById('golesson2').onclick=function(){open_form1(0,7);}
d1.getElementById('keyorder1').onclick=function(){open_form1(1,1);}
d1.getElementById('keyorder2').onclick=function(){open_form1(2,2);}
d1.getElementById('keyorder3').onclick=function(){open_form1(3,3);}
d1.getElementById('keyorder4').onclick=function(){open_form1(4,4);}
d1.getElementById('keyorder5').onclick=function(){open_form1(5,5);}
d1.getElementById('lact1').onclick=function(){start1(4);}
d1.getElementById('formclose1').onclick=hide_form1;
d1.getElementById('infclose1').onclick=closeinfo1;
//-->
