var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["number"] = document.getElementById("number").value;
  formData["address"] = document.getElementById("address").value;
  formData["email"] = document.getElementById("email").value;
  formData["birth"] = document.getElementById("birth").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["status"] = document.getElementById("status").value;
  formData["spouse"] = document.getElementById("spouse").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.number;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.address;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.email;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.birth;

  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.gender;

  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.status;

  cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.spouse;

  cell9 = newRow.insertCell(9);
  cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("number").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("birth").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("status").value = "";
  document.getElementById("spouse").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("number").value = selectedRow.cells[2].innerHTML;
  document.getElementById("address").value = selectedRow.cells[3].innerHTML;
  document.getElementById("email").value = selectedRow.cells[4].innerHTML;
  document.getElementById("birth").value = selectedRow.cells[5].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[6].innerHTML;
  document.getElementById("status").value = selectedRow.cells[7].innerHTML;
  document.getElementById("spouse").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.number;
  selectedRow.cells[3].innerHTML = formData.address;
  selectedRow.cells[4].innerHTML = formData.email;
  selectedRow.cells[5].innerHTML = formData.birth;
  selectedRow.cells[6].innerHTML = formData.gender;
  selectedRow.cells[7].innerHTML = formData.status;
  selectedRow.cells[8].innerHTML = formData.spouse;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this row?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
