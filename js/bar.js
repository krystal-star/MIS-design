function barPlot(array){
    var barWid = 40;

    var svg1 = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg1.setAttributeNS(null,"width","800px");
    svg1.setAttributeNS(null,"height","400px");
    svg1.setAttributeNS(null,"version","1.1%");
    //x-axis
    var x = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    x.setAttributeNS(null, "x1", 20);
    x.setAttributeNS(null, "x2", 750);
    x.setAttributeNS(null, "y1", 300);
    x.setAttributeNS(null, "y2", 300);
    x.setAttributeNS(null, "style", "stroke:black;stroke-width:2");
    //y-axis
    var y = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    y.setAttributeNS(null, "x1", 20);
    y.setAttributeNS(null, "x2", 20);
    y.setAttributeNS(null, "y1", 20);
    y.setAttributeNS(null, "y2", 300);
    y.setAttributeNS(null, "style", "stroke:black;stroke-width:2");

    svg1.appendChild(x);
    svg1.appendChild(y);

    //bars (0,0) -> (20,700)
    var month = 1;
    for(var i=0;i<array.length; i++){
        var bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttributeNS(null, "x", 60*month-20);      //20+20*month+40*(month-1)
        bar.setAttributeNS(null, "y", 300-array[i]*0.8);
        bar.setAttributeNS(null, "width", barWid);
        bar.setAttributeNS(null, "height", array[i]*0.8);
        bar.setAttributeNS(null, "style", "fill:blue;fill-opacity:0.5");
        svg1.appendChild(bar);
        month++;
    }
    divBar.appendChild(svg1);

}