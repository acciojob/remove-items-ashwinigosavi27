const colorSelect = document.getElementById("colorSelect");
const removeButton= document.getElementsByTagName('input[type="button"]');

removeButton.addEventListener('click',()=>{
	const selectedOption = colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectedOption);
})