//your JS code here. If required.
var removeColor = document.getElementsByTagName("input")[0];

removeColor.addEventListener("click",remove);

function remove() {
	var colorset = document.getElementById("colorSelect");
	var selectedIndex = colorset.selectedIndex;
	colorset.remove(selectedIndex);
}