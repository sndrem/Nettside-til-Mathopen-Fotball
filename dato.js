$(document).ready(function(){
	setDate();
	setInterval(function(){setDate()}, 1000);

});

function setDate(){
	var date = moment().locale('nb').format('LLLL');
	$('#dato').html(date);
};
