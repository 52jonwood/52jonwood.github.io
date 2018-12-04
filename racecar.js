function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function Banner(car_name) {
console.log ("banner called");
var EndBanner  = document.getElementById("Banner");
EndBanner.innerHTML = "The " + car_name  + " car won!";
}

function drive (car, car_name){
console.log ("something worked");
document.getElementById("StopLight").src = "Greenlight.jpg";
var car1 = document.getElementById("Car1");
var car2 = document.getElementById("Car2");



	var stopping_point = 1000; 
    var pos = 0;
    var car1_pos = 0;
    var car2_pos = 0;
    var frame_rate = 500;
    var id = setInterval(frame, frame_rate);
   
     
    
function frame() {
	if (car1_pos >= stopping_point || car2_pos >= stopping_point) {
	 	clearInterval(id);
	 	 if (car1_pos >= stopping_point) {
    Banner ("blue");
    }
    else {
    Banner ("red");
    }
	document.getElementById("StopLight").src = "Redlight.jpg";

    } 
	else {
	var pixels = getRndInteger(5,50);
		pos+=pixels; 
		car1_pos += getRndInteger(5,50);
		car2_pos += getRndInteger(5,50);
		
        
        car1.style.left = car1_pos + 'px'; 
        car2.style.left = car2_pos + 'px'; 
     }
 }    



}


