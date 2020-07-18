$("#shoppingItems").on('click',"#btnDelete", function(){
    $(this).parent().parent().remove();
})
$("#shoppingItems").on('click',"#btnCheck", function(){
    $(this).parent().parent().toggleClass("check");
})
$('#btnAddItem').click(function(){
    event.preventDefault();
    var item = $("#item").val();
    $("#shoppingItems").append("<li><p>"+ item +"</p>" +
    "<div class='btns'>" +
    "<button id='btnCheck'>Check</button>" +
    "<button id='btnDelete'>Delete</button></div>" +
    "</li>");
})
