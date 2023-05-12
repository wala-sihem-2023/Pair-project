$(document).ready(function() {
    $('#loginon').submit(function(e) {
      e.preventDefault();
      
      
     
      
      var name = $('input[name="email"]').val();
      var pass = $('input[name="pass"]').val();
      
     
      localStorage.setItem("user",JSON.stringify({name:name,password:pass})) // push the items
      localStorage.getItem("user") // get the items
      window.location.href = "resrvation.html";
   
  });
});


$(document).ready(function() {
$("#b1").click(function() {
    alert("we will call you");
});
})





$(document).ready(function() {
  $('.search').keyup(function() { // we use keyup for the event of the search input field
    var searchText = $(this).val().toLowerCase();
    $('.card').each(function() {
      var cardText = $(this).find('h4').text().toLowerCase();
      if (cardText.indexOf(searchText) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
});




function House(titel,src){
  return {titel,src}
}
var house1=House("","")




var count =$(".num").text() 


$(".like").on("click",function(){
  count++
  $(".num").text(count) 
})
$(".dlike").on("click",function(){
  count--
  $(".num").text(count) 
})

var array=["Les maisons blanches et bleues","Dar Benti","Villa Verde","Dar Ichkeul","Dar el Karma ","Dar Monia","Dar HI Nafta","Dar Lily ","Dar Foulla","Verger des Montagnes Testour ","Dar Zargouni Nefta","Dar Seddik"]






