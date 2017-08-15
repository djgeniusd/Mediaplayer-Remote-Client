function show(obj) {
    var x = obj.dataset.functionval;
	var y = document.getElementsByClassName(x).className = x;
    var z = document.getElementsByClassName(y);
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";
		z[i].style.visibility = "visible";
    }
}
function hide(obj) {
    var x = obj.dataset.functionval;
	var y = document.getElementsByClassName(x).className = x;
    var z = document.getElementsByClassName(y);
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
		z[i].style.visibility = "hidden";
    }
}