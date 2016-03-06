$(document).ready(pageReady);
    function pageReady() {       
    	$("p").hide();
    	$(".readmore1").show();
    	$(".readmore2").show();
    	$(".learnmore").show();
}
$(".readmore1, .readmore2, .readless1, .readless2, .learnmore").click(handleClick);
  function handleClick() {
  	event.preventDefault();
}

$(".readmore1").click(readmore1show);
$(".readmore2").click(readmore2show);
$(".readless1").click(readless1show);
$(".readless2").click(readless2show);
$(".learnmore").click(learnmoreshow);

function readmore1show() {
$(".first-p").slideDown("slow");
$(".readless1").show();
$(".readmore1").hide();
}

function readmore2show() {
$(".second-p").slideDown("slow");
$(".readless2").show();
$(".readmore2").hide();
}

function readless1show() {
$(".first-p").slideUp("slow");
$(".readless1").hide();
$(".readmore1").show();
}

function readless2show() {
$(".second-p").slideUp("slow");
$(".readless2").hide();
$(".readmore2").show();
}

function learnmoreshow() {
$(".learnmore-p").slideDown("slow");
$(".learnmore").hide();
}
