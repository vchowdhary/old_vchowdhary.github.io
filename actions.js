// JavaScript Document
function myFunction(){
	var pic = document.getElementById("picture");
	//picture.style.backgroundImage = 'url(twins.jpg)';
	
	//current image = twinnie
	//2nd image = twins 
	
	if(pic.style.backgroundImage === 'url("twinnie.jpg")'){
		pic.style.backgroundImage = 'url("twins.jpg")';
		console.log("if");
	}
	
	else
	{
		pic.style.backgroundImage = 'url("twinnie.jpg")';
		console.log("else");
	}
}

function toggle_visibility(){
	var text = document.getElementById("extra");
	var s_o = document.getElementById("girl_scouts");
	if(text.style.display === 'none')
	{
		fadeIn("extra", "block");
		text.style.top = '-3%';
		text.style.left = '22%';
		s_o.style.top = '400px';
		s_o.style.left = '0px';
	}
	else
	{
		fadeOut("extra");
	}
}

// fade out

function fadeOut(el){
	var el2 = document.getElementById(el);
  el2.style.opacity = 1;

  (function fade() {
    if ((el2.style.opacity -= 0.1) < 0) {
      el2.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
	var el2 = document.getElementById(el);
  el2.style.opacity = 0;
  el2.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el2.style.opacity);
    if (((val += 0.1) <= 1)) {
      el2.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
function toggleImage(){
var current_image = document.getElementById("projects-image");
console.log("click:");

if(current_image.src.match('paddleball-code.PNG'))
{
	current_image.src = "paddleball-output.PNG";
	console.log("change paddleball");
}
else if(current_image.src.match("paddleball-output.PNG"))
{
	current_image.src="paddleball-code.PNG";
}
else if(current_image.src.match("mp3-code.PNG")){
	current_image.src = "mp3-output.PNG";
}
else if(current_image.src.match("mp3-output.PNG")){
	current_image.src = "mp3-code.PNG";
}
else if(current_image.src.match("houses-code.PNG")){
	current_image.src = "houses-output.PNG";	
}
else if(current_image.src.match("houses-output.PNG")){
	current_image.src = "houses-code.PNG";	
}
else if(current_image.src.match("blackjck-code.PNG")){
	current_image.src = "blacjack-output.PNG";	
}
else if(current_image.src.match("blacjack-output.PNG")){
	current_image.src = "blackjck-code.PNG";	
}
}

function toggleProject(){
var current_project = document.getElementById("projects-title");
console.log(current_project);

var current_image = document.getElementById("projects-image");
console.log(current_image);

var current_description = document.getElementById("projects-paragraph");

var paddleball_title = "<strong>PADDLEBALL:</strong>";
var paddleball_image = "paddleball-code.png";
var paddleball_description = "paddleball yo";

var mp3_title = "<strong>MP3 PLAYER:</strong>";
var mp3_image = "mp3-code.png";
var mp3_description = "mp3 player yo";

var houses_title = "<strong>HOUSES:</strong>";
var houses_image = "houses-code.png";
var houses_description = "houses yo";

var blackjack_title = "<strong>BLACKJACK:</strong>";
var blacjack_image = "blackjck-code.png";
var blackjack_description = "blacjack yo";

if(current_project.innerHTML === paddleball_title){
	current_project.innerHTML = mp3_title;
	current_image.src = mp3_image;
	current_description.innerHTML = mp3_description;
}
else if(current_project.innerHTML === mp3_title){
	current_project.innerHTML = houses_title;
	current_image.src = houses_image;
	current_description.innerHTML = houses_description;
}
else if(current_project.innerHTML === houses_title){
	current_project.innerHTML = blackjack_title;
	current_image.src = blacjack_image;
	current_description.innerHTML = blackjack_description;	
}
else if(current_project === blackjack_title){
	current_project.innerHTML = paddleball_title;
	current_image.src = paddleball_image;
	current_description.innerHTML = paddleball_description;	
}
}