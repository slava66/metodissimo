<!--
num=0;
step=230;
min1=(0-(230*5));
min2=(0-(230*8));
max=0;
stat1=0;
thisphoto1=0;
left=0;
right=1;
d1=document;

function karusel_right1()
{
 width1=d1.body.clientWidth;
 if (width1>640)
 {min=min1;}
 else
 {min=min2;}
 num-=step;
 vleft=num+'px';
 if (num>min)
 {
 d1.getElementById('rkarusel1').style.opacity=1.0;
 d1.getElementById('lkarusel1').style.opacity=1.0;
 d1.getElementById('lkarusel1').style.filter="alpha(opacity=100)";
 d1.getElementById('rkarusel1').style.filter="alpha(opacity=100)";
 d1.getElementById('bkarusel1').style.marginLeft=vleft;
 }
 else
 {
 num=min;
 vleft=num+'px';
 d1.getElementById('rkarusel1').style.opacity=0.40;
 d1.getElementById('rkarusel1').style.filter="alpha(opacity=40)";
 d1.getElementById('bkarusel1').style.marginLeft=vleft;
 }
}
function karusel_left1()
{
 /*
 if (stat1==0)
 {
 stat1=1;
 */
 width1=d1.body.clientWidth;
 if (width1>640)
 {max=min1;}
 else
 {max=min2;}
 /* num=max;
 }
 */
 num+=step;
 vright=num+'px';
 if (num<0)
 {
 d1.getElementById('lkarusel1').style.opacity=1.0;
 d1.getElementById('rkarusel1').style.opacity=1.0;
 d1.getElementById('lkarusel1').style.filter="alpha(opacity=100)";
 d1.getElementById('rkarusel1').style.filter="alpha(opacity=100)";
 d1.getElementById('bkarusel1').style.marginLeft=vright;
 }
 else
 {
 num=0;
 vright=num+'px';
 d1.getElementById('lkarusel1').style.opacity=0.40;
 d1.getElementById('lkarusel1').style.filter="alpha(opacity=40)";
 d1.getElementById('bkarusel1').style.marginLeft=vright;
 }
}

function change_photo1()
{
 var aphotos1=Array(10);
 aphotos1[1]='reviews/reference01.jpg';
 aphotos1[2]='reviews/reference02.jpg';
 aphotos1[3]='reviews/reference03.jpg';
 aphotos1[4]='reviews/reference04.jpg';
 aphotos1[5]='reviews/reference05.jpg';
 aphotos1[6]='reviews/reference06.jpg';
 aphotos1[7]='reviews/reference07.jpg';
 aphotos1[8]='reviews/reference08.jpg';
 aphotos1[9]='reviews/reference09.jpg';
 thisphoto1++;
 if (thisphoto1>=10)
 thisphoto1=1;
 d1.getElementById('karphoto1').src=aphotos1[thisphoto1];
}

function open_photo1(photo1)
{
 thisphoto1=photo1;
 var aphotos1=Array(10);
 aphotos1[1]='reviews/reference01.jpg';
 aphotos1[2]='reviews/reference02.jpg';
 aphotos1[3]='reviews/reference03.jpg';
 aphotos1[4]='reviews/reference04.jpg';
 aphotos1[5]='reviews/reference05.jpg';
 aphotos1[6]='reviews/reference06.jpg';
 aphotos1[7]='reviews/reference07.jpg';
 aphotos1[8]='reviews/reference08.jpg';
 aphotos1[9]='reviews/reference09.jpg';
 d1.getElementById('karphoto1').src=aphotos1[photo1];
 d1.getElementById('ibackkar1').style.display="block";
 d1.getElementById('greview1').style.display="block";
}

function close_photo1()
{
 d1.getElementById('ibackkar1').style.display="none";
 d1.getElementById('greview1').style.display="none";
}

function init1()
{
 d1.getElementById('lkarusel1').style.opacity=0.40;
 d1.getElementById('rkarusel1').style.opacity=1.0;
 d1.getElementById('lkarusel1').style.filter="alpha(opacity=40)";
 d1.getElementById('rkarusel1').style.filter="alpha(opacity=100)";
}
/*
d1.getElementById('kimg1').onclick=function(){open_photo1(1);};
d1.getElementById('kimg2').onclick=function(){open_photo1(2);};
d1.getElementById('kimg3').onclick=function(){open_photo1(3);};
d1.getElementById('kimg4').onclick=function(){open_photo1(4);};
d1.getElementById('kimg5').onclick=function(){open_photo1(5);};
d1.getElementById('kimg6').onclick=function(){open_photo1(6);};
d1.getElementById('kimg7').onclick=function(){open_photo1(7);};
d1.getElementById('kimg8').onclick=function(){open_photo1(8);};
d1.getElementById('kimg9').onclick=function(){open_photo1(9);};
*/
d1.getElementById('lkarusel1').onclick=karusel_left1;
d1.getElementById('rkarusel1').onclick=karusel_right1;
d1.getElementById('karphoto1').onclick=change_photo1;
d1.getElementById('closephoto1').onclick=close_photo1;
d1.getElementById('ibackkar1').onclick=close_photo1;
init1();
//-->
