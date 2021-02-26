function lineChart(array){
    var divLine = document.createElement("canvas");
    var max = Math.max(...array);
    divLine.id = "line";
    divLine.width = 450;
    divLine.height = max;
    if(divLine.getContext){
        var ctx = divLine.getContext("2d");
        //x-axis
        ctx.beginPath();
        ctx.moveTo(20, max);
        ctx.lineTo(450, max);
        ctx.stroke();
        //y-axis
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20, max);
        ctx.stroke();
        //lines
        var month = 1;
        for(var i=0;i<array.length; i++){
            if(i == 0){
                ctx.moveTo(30,max-array[i]);
            }else{
                ctx.lineTo(30*month,max-array[i]);
            }
            month++;
        }
        ctx.stroke();
    }
    document.getElementsByTagName("body")[0].appendChild(divLine);
}