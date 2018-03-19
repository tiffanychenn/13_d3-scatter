var svg = document.getElementById("svg");
var d = [24547,0,214,0,6513,435,4341,970,39165,0,9321,0,6597,371,672,0,151,0,21971,0,24308,0,0,0,1069,0,21425,0,39795,0,12031,2441,1990,4,387471,0,2148,0,596,0,0,0,2691,0,7360,0,20478,3,35973,0,2568,0,744,0,1474,0,5289,53,2823,0,2346,0,0,0,1170,0,2670,1610,30480,0,710,0,15308,170,0,0,5200,4,30952,0,0,0,0,0,5080,334,835,0,16709,0,36801,0,12863,91,0,0,3,0,1474,2,15794,109,3739,0,14483,0,504,15]

var circle = function(x, y) {
	var c3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c3.setAttribute("cx", x);
	c3.setAttribute("cy", y);
	c3.setAttribute("r", 5);
	c3.setAttribute("stroke", "#FFFFFF");
	c3.setAttribute("fill", "lightsteelblue");
	svg.appendChild(c3);
}

var g=function(n){
    var circ = d3.select("svg")
		.selectAll("circle")
		.enter();
	circ.append("circle").attr("cx", d[2 * n]).attr("cx", d[2 * n + 1]).attr("r", 10);
};

for (i = 0; i < d.length / 2; i ++){
	g(i);
}