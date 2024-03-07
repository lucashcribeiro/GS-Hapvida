document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("pitch").addEventListener("click", pitch);
document.getElementById("newsletterForm").addEventListener("submit", handleSubmit);

function toggle(e) {
	const content = document.getElementById("content");

	if (content.style.getPropertyValue("display") == "none") {
		content.style.setProperty("display", "block");
	} else {
		content.style.setProperty("display", "none");
	} 
}
function pitch(e) {
	const content = document.getElementById("banner");

	if (content.style.getPropertyValue("display") == "none") {
		content.style.setProperty("display", "flex");
	} else {
		content.style.setProperty("display", "none");
	} 
}

function handleSubmit(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    console.log(email);

    alert(`Obrigado, ${nome}! Te manteremos atualizado sobre a Helfhiap.`);
}
