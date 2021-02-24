function barPlot(array){
    var divBar = document.createElement("div");
    divBar.id = "bar";
    var barWid = 20, max = Math.max(...array);  //寻找数组最大值

    var svg1 = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg1.setAttributeNS(null,"width","450");
    svg1.setAttributeNS(null,"height", max);
    svg1.setAttributeNS(null,"version","1.1%");
    //x-axis
    var x = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    x.setAttributeNS(null, "x1", 20);
    x.setAttributeNS(null, "x2", 750);
    x.setAttributeNS(null, "y1", max);
    x.setAttributeNS(null, "y2", max);
    x.setAttributeNS(null, "style", "stroke:black;stroke-width:2");
    //y-axis
    var y = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    y.setAttributeNS(null, "x1", 20);
    y.setAttributeNS(null, "x2", 20);
    y.setAttributeNS(null, "y1", 20);
    y.setAttributeNS(null, "y2", max);
    y.setAttributeNS(null, "style", "stroke:black;stroke-width:2");

    svg1.appendChild(x);
    svg1.appendChild(y);

    //bars (0,0) -> (20,700)
    var month = 1;
    for(var i=0;i<array.length; i++){
        var bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttributeNS(null, "x", 30*month);      //20+20*month+40*(month-1)
        bar.setAttributeNS(null, "y", max-array[i]);
        bar.setAttributeNS(null, "width", barWid);
        bar.setAttributeNS(null, "height", array[i]);
        bar.setAttributeNS(null, "style", "fill:blue;fill-opacity:0.5");
        svg1.appendChild(bar);
        month++;
    }
    divBar.appendChild(svg1);
    document.getElementsByTagName("body")[0].appendChild(divBar);
}