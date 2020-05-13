$(document).scroll(function(){

var y = $(document).scrollTop();

var h = $(document).height() - $(window).height();
var scrolled = (y/h) * 100;
$(".bar").css("width", scrolled+"%");


$(".update").html(y);
if (y>2050) {
	$(".scroll").fadeOut(10);
}

else {
	$(".scroll").fadeIn(100);
}



/*we are the ones*/

$(".update").html(y);
if (y>300 && y<2100) {
	$(".revealone").fadeIn();
}

else {
	$(".revealone").fadeOut(100);
}

/*subheading*/

if (y>800 && y<1800) {
	$(".revealtwo").fadeIn();
}

else {
	$(".revealtwo").fadeOut(100);
}

/*we have been waiting for*/

if (y>1950) {
	$(".fixed").fadeOut(100);
}
else {
	$(".fixed").fadeIn();
}


/*bds header*/

if (y>2500 && y<5500) {
	$(".revealthree").fadeIn();
	$(".bdsbio").fadeIn(100);
}
else {
	$(".revealthree").fadeOut(10);
	$(".bdsbio").fadeOut(100);
}

/*bds pieces*/

if (y>3500 && y<5000) {
	$(".popup").fadeIn();
	}
else {
	$(".popup").fadeOut(100);
	}

/*ows header*/

if (y>5500 && y<8500) {
	$(".revealfour").fadeIn();
	$(".owsbio").fadeIn(100);
}
else {
	$(".revealfour").fadeOut(10);
	$(".owsbio").fadeOut(100);
}

/*ows pieces*/

if (y>6500 && y<8000) {
	$(".popup2").fadeIn();
	}
else {
	$(".popup2").fadeOut(100);
	}

/*blm header*/

if (y>8500 && y<11500) {
	$(".revealfive").fadeIn();
	$(".blmbio").fadeIn(100);
}
else {
	$(".revealfive").fadeOut(10);
	$(".blmbio").fadeOut(100);
}


/*blm pieces*/

if (y>9500 && y<11000) {
	$(".popup3").fadeIn();
	}
else {
	$(".popup3").fadeOut(100);
	}	


/*nodapl header*/

if (y>11500 && y<14500) {
	$(".revealsix").fadeIn();
	$(".nodaplbio").fadeIn(100);
}
else {
	$(".revealsix").fadeOut(10);
	$(".nodaplbio").fadeOut(100);
}


/*nodapl pieces*/

if (y>12500 && y<14000) {
	$(".popup4").fadeIn();
	}
else {
	$(".popup4").fadeOut(100);
	}		

/*womens header*/

if (y>14500 && y<17500) {
	$(".revealseven").fadeIn();
	$(".womensbio").fadeIn(100);
}
else {
	$(".revealseven").fadeOut(10);
	$(".womensbio").fadeOut(100);
}


/*womens pieces*/

if (y>15500 && y<17000) {
	$(".popup5").fadeIn();
	}
else {
	$(".popup5").fadeOut(100);
	}	

/*mfol header*/

if (y>17500 && y<20500) {
	$(".revealeight").fadeIn();
	$(".mfolbio").fadeIn(100);
}
else {
	$(".revealeight").fadeOut(10);
	$(".mfolbio").fadeOut(100);
}


/*mfol pieces*/

if (y>18500 && y<20000) {
	$(".popup6").fadeIn();
	}
else {
	$(".popup6").fadeOut(100);
	}	

/*ssfc header*/

if (y>20500 && y<23500) {
	$(".revealnine").fadeIn();
	$(".ssfcbio").fadeIn(100);
}
else {
	$(".revealnine").fadeOut(10);
	$(".ssfcbio").fadeOut(100);
}


/*ssfc pieces*/

if (y>21500 && y<23000) {
	$(".popup7").fadeIn();
	}
else {
	$(".popup7").fadeOut(100);
	}


/*fire header*/

if (y>23500 && y<26500) {
	$(".revealten").fadeIn();
	$(".firebio").fadeIn(100);
}
else {
	$(".revealten").fadeOut(10);
	$(".firebio").fadeOut(100);
}


/*fire pieces*/

if (y>24500 && y<26000) {
	$(".popup8").fadeIn();
	}
else {
	$(".popup8").fadeOut(100);
	}


});