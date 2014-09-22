$(document).ready(function() {

	$('.resume-click').click('toggle', function(event){
			event.preventDefault();
			$('.resume-add').slideToggle(400);
	});

	$('.project-click').click('toggle', function(event){
			event.preventDefault();
			$('.project-list').slideToggle(400);
	});

});