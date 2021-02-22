//初始化
var divRegion = document.getElementById("region-radio-wrapper");
var divProduct = document.getElementById("product-radio-wrapper");
var table = document.querySelectorAll("#table-wrapper > table");
var dictProduct = {"手机":0, "笔记本":1, "智能音箱":2}
    ,dictRegion = {"华东":0, "华南":1, "华北":2};

getCheckBox(divRegion,1);
getCheckBox(divProduct,2);

divRegion.onchange = change;
divProduct.onchange = change;