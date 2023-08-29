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