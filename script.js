var myText = document.getElementById("myText");
var charCount = document.getElementById("charCount");
var form = document.getElementById("contact");
var konamicode = document.getElementById("konamicode")

function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onKonamiCode(function (){
    alert('⇧⇧⇩⇩⇦⇨⇦⇨ⒷⒶ');
    document.body.style.cursor = 'url("Images/konami.gif"), auto';
})

window.onbeforeunload = function () {
    window.scrollTo(0,0);
    konamicode.style.cursor(url = "Images/konami.gif")
};

myText.addEventListener("keyup",function(){
	var characters = myText.value.split('');
    charCount.innerText = 600 - characters.length;

form.onsubmit = function(e) {
    e.preventDefault();
    console.log(form.fname.value);
    console.log(form.lname.value);
    console.log(form.email.value);
    console.log(form.myText.value);
    charCount.innterText = 600
    form.reset();

}

});