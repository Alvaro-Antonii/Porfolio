// Scrolling Effect


// function mostrar(){
// 	console.log("funco");
// 	document.getElementById("info").style.display = 'block';
// }
let h_btn = document.querySelector("#efecto");
let h_text = document.querySelector("#texto");

h_btn.addEventListener("click", toggleText);

function toggleText(){
	h_text.classList.toggle("show");

	if(h_text.classList.contains("show")){
		h_btn.innerHTML = "Mostrar menos";
	} else{
		h_btn.innerHTML = "Mostrar más";
	}
}


let h_btn2 = document.querySelector("#efecto2");
let h_text2 = document.querySelector("#texto2");

h_btn2.addEventListener("click", toggleText2);

function toggleText2(){
	h_text2.classList.toggle("show");

	if(h_text2.classList.contains("show")){
		h_btn2.innerHTML = "Mostrar menos";
	} else{
		h_btn2.innerHTML = "Mostrar más";
	}
}
