var inputs = document.querySelectorAll("td#sale > input");

for(var i=0; i<inputs.length; i++){
    inputs[i].onblur = function(e){
        var target = e.target;
        console.log("test");
        if(!isRealNum(target.value)){
            alert("invalid input");
        }else{
            console.log(target.value);
        }
    }
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
