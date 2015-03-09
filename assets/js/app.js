$(document).ready(function() {
    $('.about').fadeIn();

// On Click "About" 
// If .about is showing, do nothing
// Else hide .resume or .project; Show .about with slide animations

$('.a-click').on('click', function(event){
    
    if( !$("section.about").is(":visible") ){

    	$("section.resume, section.projects").fadeOut('400', function() {
    		
    	});

        $("section.about").fadeIn('400', function() { $("section.about").show();  
        });
    }

});

// On Click "Resume" 
// If .resume is showing, do nothing
// Else hide .about or .project; Show .resume with slide animations

$('.r-click').on('click', function(event){
    
    if( !$("section.resume").is(":visible") ){

    	$("section.about, section.projects").fadeOut('400', function() {
    		
    	});

        $("section.resume").fadeIn('400', function() {$("section.resume").show()
        	
        });
    }

});

// On Click "Projects" 
// If .projects is showing, do nothing
// Else hide .resume or .about; Show .projects with slide animations

$('.p-click').on('click', function(event){
    
    if( !$("section.projects").is(":visible") ){

    	$("section.about, section.resume").fadeOut('400', function() {
400    	});

        $("section.projects").fadeIn('400', function() { $("section.projects").show()
        	
        });
    }

});

// Show and hide Resume sections

$(".edu-click").on("click", function(event) {
    event.preventDefault();
    
    $('.edu-hide').fadeToggle('400', function() {
        
    });
                     
    });

$(".emp-click").on("click", function(event) {
    event.preventDefault();
    
    $('.emp-hide').fadeToggle('400', function() {
        
    });
                     
    });

$(".awa-click").on("click", function(event) {
    event.preventDefault();
    
    $('.awa-hide').fadeToggle('400', function() {
        
    });
                     
    });

});
