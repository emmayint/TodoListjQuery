//check of todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete todo by clicking x
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//retrieve text input
		var todoInput = $(this).val();
		$(this).val("");
		//create a new li with append()
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todoInput + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});