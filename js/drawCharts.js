var table = document.querySelectorAll("#table-wrapper > table");
table[0].addEventListener("mouseover", function(e){
    var target = e.target;
    if(target.nodeName.toLowerCase() == "td" || target.nodeName.toLowerCase() == "input"){
        var targetData = [];
        if(target.nodeName.toLowerCase() == "td"){
            var tr = target.parentNode;  //父节点
        }else{
            var tr = target.parentNode.parentNode;
        }        
        var inputs = tr.querySelectorAll("input");
        for(var i=0;i<inputs.length;i++){           
            targetData.push(Number(inputs[i].value));
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
