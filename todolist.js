function getAndupdate() {

    console.log("Updating the list ....");
    tit = document.getElementById("title").value
    desc = document.getElementById("description").value
    if (localStorage.getItem('items') == null) {
        itemsArray = [];
        itemsArray.push([tit, desc])
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }
    else {
        itemsArrayStr = localStorage.getItem('items')
        itemsArray = JSON.parse(itemsArrayStr)
        itemsArray.push([tit, desc])
        localStorage.setItem('items', JSON.stringify(itemsArray))
        update();
    }
}
function update() {

    // adding full contents to the table
    if (localStorage.getItem('items') == null) {
        itemsArray = [];
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }
    else {
        itemsArrayStr = localStorage.getItem('items')
        itemsArray = JSON.parse(itemsArrayStr)


    }
    tableBody = document.getElementById("table_1")
    let str = ""
    itemsArray.forEach((element, index) => {
        str += `
     <tr>
            <th scope="row">${index + 1}</th>
            <td> ${element[0]}</td>
            <td>${element[1]}</td>
            <td><button type="button" class="btn  btn-primary" onclick="del(${index})">Delete</button></td>
            
            
          </tr>`

    })
    tableBody.innerHTML = str;



}


addd = document.getElementById("add");
addd.addEventListener('click', getAndupdate);
update();
function del(item_index) {
    console.log("Delete", item_index)
    itemsArrayStr = localStorage.getItem('items')
    itemsArray = JSON.parse(itemsArrayStr)
    // delete the itemIndex from the array
    itemsArray.splice(item_index, 1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    update();
}
function clearclean() {
    if (confirm("Do you really want to clear")) {

        localStorage.clear();
        console.log('Clearing the storage')
        update();
    }
}
function edit(){
    
}