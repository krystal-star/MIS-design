document.getElementById("save").onclick = getTableData;

function getTableData(){
    var newData = [];
    var table = document.querySelectorAll("#table-wrapper > table")[0];
    var lines = table.rows.length;
    for(var i=1; i<lines; i++){
        newData.push(getRowData(table.rows[i]));

    }
    localStorage.data = JSON.stringify(newData);  //JSON编码存储
}

function getRowData(row){
    var newRow = [];
    var tds = row.cells.length;
    if(tds == 14){
        var j = 2;
    }else if(tds == 13){
        var j = 1;
    }

    for(j;j<tds;j++){
        newRow.push(Number(row.cells[j].innerHTML));
    }

    return newRow;   
}