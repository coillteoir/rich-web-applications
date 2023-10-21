var Contact = /** @class */ (function () {
    function Contact(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    return Contact;
}());
;
var addToTable = function (contact) {
    var table = document.getElementById("contacts");
    var newRow = document.createElement("tr");
    var newName = document.createElement("td");
    var newPhone = document.createElement("td");
    var newEmail = document.createElement("td");
    newName.innerText = contact.name;
    newPhone.innerText = contact.phone;
    newEmail.innerText = contact.email;
    newRow.appendChild(newName);
    newRow.appendChild(newPhone);
    newRow.appendChild(newEmail);
    table.appendChild(newRow);
};
var generateContact = function (form) {
    var inputData = Array.from(form.childNodes).filter(function (elm) { return elm.nodeName == "INPUT"; });
    var name = inputData.find(function (x) { return x.name == "fName"; }).value;
    var number = inputData.find(function (x) { return x.name == "number"; }).value;
    var email = inputData.find(function (x) { return x.name == "email"; }).value;
    console.log(name, number, email);
    addToTable(new Contact(name, number, email));
};
