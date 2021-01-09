//add row
function appendRow() {
    let tbl = document.getElementById('my-table'), // referring to table
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}
 
function createCell(cell, text, style) {
    let div = document.createElement('div'),
        txt = document.createTextNode(text); 
    div.appendChild(txt);                    
    div.setAttribute('class', style);       
    div.setAttribute('className', style);   
    cell.appendChild(div);                   
}

//add column
function appendColumn() {
    let tbl = document.getElementById('my-table'), 
        i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}

// delete rows
function deleteRows() {
    let tbl = document.getElementById('my-table'), 
        lastRow = tbl.rows.length - 1,            
        i;
   // for (i = lastRow; i > 0; i--) {
        tbl.deleteRow(lastRow);
    //}
}

// delete columns
function deleteColumns() {
    let tbl = document.getElementById('my-table'),
        lastCol = tbl.rows[0].cells.length - 1,    
        i, j;
    // delete cells with index greater then 0 (for each row)
    for (i = 0; i < tbl.rows.length; i++) {
        for (j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}
//Changes colors
let cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
       this.className= this.className == "white" ? "green" : "white";
    });
}