// JS для сайта

// найти кнопку
// поймать событие; 
// ищим объект;
// добавляем преобразование;

var btn = document.getElementById('btn');
btn.onclick = function () {
	var a = document.querySelector('header');
	a.classList.add('header2');
}

$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__pulse");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInUp");
	        }
	    });
	});
})