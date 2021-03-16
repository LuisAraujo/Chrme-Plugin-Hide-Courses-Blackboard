$(document).ready(function(){
   
   
   $("#global-nav .nav").append('<li id="hidecourses" class="nav-item"><a class="nav-link">Apenas 2021.1</a></li>')
   
	
    $("#hidecourses").click( function(){

		$(".disciplina").each(function(index, value){
		  
			let info = $(this).find(".nome-disciplina").html();
			
			if(!info.includes("20211")){
				
				$(this).hide();
			}
		   
		});
   
	});
   

})


