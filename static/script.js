

$('a.modalbtn').click(function (e) {
	e.preventDefault();
	var destinatonPopup = $(this).attr("href");
	$(destinatonPopup).addClass('show');
	$(destinatonPopup + ' .popup__close').click(function(){
		$(destinatonPopup).removeClass('show');
	});
});