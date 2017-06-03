$(document).ready(function(){

	// modify
	$(".message").click(function(){
		$('#myModal').modal('show');
		$('#modal-original-message').text($(this).text());
		$(this).addClass("message-edit");
	});

	$("#btn-close").click(function(){
		$('#myModal').modal('hide');
		$('#modal-original-message').text("");
		$("#modal-corrected-message").val("")
		$(".message-edit").removeClass("message-edit");
	});

	$("#btn-correct").click(function(){
		$(".message-edit").text($("#modal-corrected-message").val());
		$(".message-edit").removeClass("lanex-message-basic-chat");
		$(".message-edit").addClass("lanex-message-translated-chat");
		$('#myModal').modal('hide');
		$('#modal-original-message').text("");
		$("#modal-corrected-message").val("")
		$(".message-edit").removeClass("message-edit");
	});


	$("#typein-message").keyup(function (e) {
		if (e.which == 13) {
			// Enter key pressed
			var imessage = "<div class=\"col-xs-12\">";
			imessage = imessage + "<p class=\"message lanex-message-basic-chat\">";
			imessage = imessage + $(this).val();
			imessage = imessage + "</p>";
			imessage = imessage + "</div>";

			$("#chat-box").append(imessage);
			$(this).val("");
		}
 });


	/*
    $(this).click(function(){

            alert("The paragraph is now hidden");

    });*/

/*
	$("p").on("tap",function(){
		alert("The paragraph is now hidden 1");
	  //$(this).hide();

	});

	$("p").on("taphold",function(){
		//$(this).hide();
		$(this).text("Hello world!");
		//alert("The paragraph is now hidden 2");
	});
*/


});
