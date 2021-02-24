var table = document.querySelectorAll("#table-wrapper > table");
table[0].addEventListener("mouseover", function(e){
    var target = e.target;
    if(target.nodeName.toLowerCase() == "td"){
        var targetData = []
        var tr = target.parentNode;  //父节点
        if(tr.cells.length == 14){
            var i = 2;
        }else{
            var i = 1;
        }
        for(i;i<tr.cells.length;i++){
            targetData.push(Number(tr.cells[i].innerHTML));
        }
        //console.log(targetData);
        barPlot(targetData);
        lineChart(targetData);
    }
});

table[0].addEventListener("mouseout",function(e){
    //删除图表
    if(document.querySelectorAll("div#bar").length != 0){
        document.getElementsByTagName("body")[0].removeChild(document.querySelectorAll("div#bar")[0]);
    }
    if(document.querySelectorAll("canvas#line").length != 0){
        document.getElementsByTagName("body")[0].removeChild(document.querySelectorAll("canvas#line")[0]);
    }
})
