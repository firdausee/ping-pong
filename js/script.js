// business logic
 function pingPing(userInput){
   for (var i=1; i<=userInput;i++){
     if(i%5===0 && i%3===0){
       $("ul").append("<li>"+"pingpong"+"</li>");
     }else if(i%3===0){
         $("ul").append("<li>"+"ping"+"</li>");
       }else if (i%5===0) {
         $("ul").append("<li>"+"pong"+"</li>");
       } else{
           $("ul").append("<li>"+i+"</li>");
   }
}
};
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input").val();
    pingPing(userInput);
    $("#result").show();
  })
})
