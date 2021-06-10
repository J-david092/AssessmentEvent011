function newImage () {
    document.getElementById("myImg").src ="images/facelike.png";
  }
function face () {
    document.getElementById("myImg").src ="images/facebook.png";
  }
function newImage2 () {
    document.getElementById("myImg2").src ="images/instalike.png";
  }
function face2 () {
    document.getElementById("myImg2").src ="images/instagram.png";
  }
function newImage3 () {
    document.getElementById("myImg3").src ="images/workinprogress.png";
  }
function face3 () {
    document.getElementById("myImg3").src ="images/tool.svg";
  }

function alert()
  {
  var menssage;
  var option = confirm("Ok=Yes and Cancel=No");
  if (option == true) {

      message = "Thank you for your opinion!";
} else {
}
document.getElementById("example").innerHTML = message;
document.getElementById("example").style="color:white";
}
