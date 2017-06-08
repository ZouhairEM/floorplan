var buttons = document.querySelectorAll(".buttons button"); // Go inside the button div and take all the button elements
var floorplan = document.getElementsByClassName("floorplan")[0]; // The zero will give you the first element in the collection


for (i=0; i< buttons.length; i++) {
	buttons[i].addEventListener("click", manageReservedTables);
}

function manageReservedTables () {
	if (this.getAttribute("data-add")) {
		Table_1.classList.add(this.getAttribute("data-add"));
	}
	if (this.getAttribute("data-remove")) {
		Table_1.classList.remove(this.getAttribute("data-remove"));
	}	
}