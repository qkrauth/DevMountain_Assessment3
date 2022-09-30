console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted just now! CONGRATS! HOW DID U SUBMIT A FORM?")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function hover(event) {
	alert("Nice work, you hovered over the rubber duck!");
}

let form2 = document.querySelector("img");
form2.addEventListener("mouseover", hover);