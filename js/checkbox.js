function getCheckBox(div,num){
    //全选功能
    div.querySelectorAll("button")[0].onclick = function(){
        var val = getChecked(num);
        //console.log(val);
        if(val === 3){
            div.setAttribute("checkbox-type","all");
        }else{
            div.setAttribute("checkbox-type","none");
        }

        var boxs = div.querySelectorAll("input");
        if(div.getAttribute("checkbox-type") == "none"){ 
            for(var i=0; i<boxs.length; i++){
                boxs[i].checked = true;
            }
            div.setAttribute("checkbox-type","all");
        }

        else if(div.getAttribute("checkbox-type") == "all"){
            for(var i=0; i<boxs.length; i++){
                boxs[i].checked = false;
            }
            div.setAttribute("checkbox-type","none");
        }
        change();
    }
}

function getChecked(num){
    //获取checked的inputs
    var boxes = document.querySelectorAll("div.radios > input");
    var checkedRegion = [0,1,2], checkedProduct = [0,1,2];
    for(var i=0; i<boxes.length;i++){
        if(boxes[i].checked == false && i < 3){
            checkedRegion.splice(checkedRegion.indexOf(i),1);         //splice()根据引索删除
            //console.log(checkedRegion);
        }else if(boxes[i].checked == false && i >= 3){
            checkedProduct.splice(checkedProduct.indexOf(i-3),1);
        }
    }

    if(num == 1){
        return checkedRegion.length;
    }else if(num == 2){
        return checkedProduct.length;
    }else{                
        var checked = {region:checkedRegion, product:checkedProduct};
        return checked;   //js不能return多个数据 -> 处理成对象
    }
    
}

function change(){
    removeTable();
    getNewTable();
    format();
    showBtn();
}     

function getData(){
    //获取checked的inputs
    var checkedRegion = getChecked(0).region,
    checkedProduct = getChecked(0).product;
    
    var targetData = [];
    for(var j=0; j<sourceData.length; j++){
        if(checkedRegion.indexOf(dictRegion[sourceData[j].region]) != -1 && 
        checkedProduct.indexOf(dictProduct[sourceData[j].product]) != -1){
            var row = {}
            row.data = sourceData[j];
            row.index = j;
            targetData.push(row);
        }
    }
    
    return targetData;            
}

function getNewTable(){
    var regionData = getData();
    for(var i=0; i<regionData.length; i++){
        var newTr = document.createElement("tr");
        newTr.id = "data";
        //product
        var newTd1 = document.createElement("td");
        newTd1.innerHTML = regionData[i].data.product;
        newTr.appendChild(newTd1);
        //region
        var newTd2 = document.createElement("td");
        newTd2.innerHTML = regionData[i].data.region;
        newTr.appendChild(newTd2);

        //sale 读取localStorage里的数据
        if(localStorage.data){
            var sales = JSON.parse(localStorage.data)[regionData[i].index];
        }else{
            var sales = regionData[i].data.sale;
        }
        for(var j=0;j<sales.length; j++){
            var newTd = document.createElement("td")
            newTd.innerHTML = sales[j];
            newTd.className = "sale";
            newTd.setAttribute("editType","false");
            newTr.appendChild(newTd);
        }
        
        //row
        table[0].appendChild(newTr);
    }
    
    document.getElementById("table-wrapper").style = "display: block";
}

function removeTable(){
    var trs = document.querySelectorAll("tr#data");
    for(var i=0; i<trs.length; i++){
        table[0].removeChild(trs[i]);
    }
}

function format(){
    var trs = document.querySelectorAll("tr");
    var regionNum = getChecked(1), productNum = getChecked(2);
    
    if(regionNum ==1 && productNum > 1){
        for(var i=0; i<trs.length;i++){          
            trs[i].insertBefore(trs[i].cells[1], trs[i].cells[0]);  //交换表格两列！
            if(i%productNum == 1){   //合并
                    trs[i].cells[0].rowSpan = productNum;
            }else{
                if(i!=0){
                    trs[i].removeChild(trs[i].cells[0]);
                }                            
            }
        }
        
    }else{
        if(trs[0].cells[0].innerHTML == "地区" ){
            trs[0].insertBefore(trs[0].cells[1], trs[0].cells[0]);  //还原表头
        }
        if(regionNum > 1 && productNum >= 1){
            for(var j=0; j<trs.length; j++){
                if(j%regionNum == 1){
                    trs[j].cells[0].rowSpan = regionNum;
                }else{
                    if(j!=0){
                        trs[j].removeChild(trs[j].cells[0]);
                    }                            
                }
            }
        }
    }
}

function showBtn(){
    if(getChecked(1) === 3 && getChecked(2) === 3){
        console.log("checked");
        document.getElementById("save").style = "display: block";
        document.getElementById("save_tip").style = "display: none";
    }else{
        document.getElementById("save").style = "display: none";
    }
}