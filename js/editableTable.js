function editTable(){
    table[0].onclick = function(e){
        var target = e.target;
        if(target.className.toLowerCase() == "sale"){
            addInput(target,target.innerHTML);
            //addBtns(target, target.innerHTML); //感觉加个btn在这里很多余
        }
    }
}

function addInput(td,value){
    var editState = td.getAttribute("editType");  
    if(editState != "true"){  
       //创建文本框  
       var textBox = document.createElement("INPUT");  
       textBox.type = "text";  
       textBox.size = 5;
       textBox.value = value;  
        
       //向当前单元格添加文本框  
       td.innerHTML = ""; 
       td.appendChild(textBox);  
       textBox.focus();  
       textBox.select();  
        
       //改变状态变量  
       td.setAttribute("editType", "true"); 
      
       //设置文本框的失去焦点事件  
        textBox.addEventListener("blur",doBlur);
        
        textBox.onkeydown =  function(e){          
            if(e.keyCode == 13){
                textBox.removeEventListener("blur", doBlur);    //处理onblur和onkeydown的冲突
                confirm(this.parentNode, value, textBox.value);
            }
            else if(e.keyCode == 27){
                textBox.removeEventListener("blur", doBlur);
                cancelEdit(this.parentNode,value);
            }
        }

        function doBlur(){
            confirm(this.parentNode, value, textBox.value);  
        }  

    } 
}

function addBtns(td, value){
    //创建按钮
    var divButtons = document.createElement("div");
    var btn1 = document.createElement("button"),btn2 = document.createElement("button");
    btn1.innerHTML = "确定";
    btn2.innerHTML = "取消";
    btn1.id = "change1";
    btn2.id = "change2";
    divButtons.appendChild(btn1);
    divButtons.appendChild(btn2);
    td.appendChild(divButtons);

    //创建点击事件
    btn1.onclick = function(){
        console.log("click");
        var td = this.parentNode.parentNode;
        var input = td.querySelectorAll("input")[0].value;
        confirm(td, value, input);
    }
}

function cancelEdit(td, value){
    td.innerHTML = value;
    td.setAttribute("editType","false");
}


function isRealNum(val){
    if(val == null || val == undefined || val === ''|| val === ' '){
        return false;
    }
    if(!isNaN(val)){
        return true;
    }else{
        return false;
    }
}

function confirm(td, orl_value, now_value){
    //判定修改后的值
    if(!isRealNum(now_value)){
        alert("invalid input");
        cancelEdit(td,orl_value);
    }else{
        cancelEdit(td, now_value);
    }
};
