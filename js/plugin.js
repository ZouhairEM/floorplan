function highLight(){
	this.d = 0;
	this.animate = function animate(el){
		var elem = document.getElementById(el);
    	var allOthers = $(".container").children().not(elem);
		allOthers.css("opacity", "0.1");
	};
}
