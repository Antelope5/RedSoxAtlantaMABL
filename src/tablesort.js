/**
 * 
 * @param {HTMLTableElement} table the table to sort 
 * @param {string}} column The index of the col to sort 
 * @param {boolean} asc determines if the sorting is in ascending  
 */

console.log("Helllooo");
function sortTableByColumn(table, column, asc = true){
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    console.log("me cajo en tu madre");

    // Sorting the rows 
    
    /*const sortedRows = rows.sort((a, b) => {
        
        const aColText = a.querySelector('td:nth-child(${column + 1})').textContent.trim();
        const bColText = b.querySelector('td:nth-child(${column +1})').textContent.trim();
       
        return aColText > bColText ? (1*dirModifier) : (-1*dirModifier);
    });*/

    if (column == 0) {

        sortedRows = rows.sort((a, b) => {

        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);

    })

}

else {

        sortedRows = rows.sort((a, b) => {

        const aColPrice = parseFloat(a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim().replace('$', ''));

        const bColPrice = parseFloat(b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim().replace('$', ''));

        

        return aColPrice > bColPrice ? (1 * dirModifier) : (-1 * dirModifier);

    })

}


    
    // Removing all existing tr from the table

    while(tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
    }

    // re adding newly sorted rows
    tBody.append(...sortedRows);

    // remember how the col is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc","th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc",asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}


document.querySelectorAll(".table-sortable th").forEach(headerCell => {headerCell.addEventListener("click",() => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    console.log(headerIndex);
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
    
}); 