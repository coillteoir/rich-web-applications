var add_note = function () {
    var data = document.getElementById("input_note");
    var text = document.createTextNode(data.value);
    var notes = document.getElementById("notes");
    var note = document.createElement("li");
    note.textContent = data.value;
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = function () { return deleteButton.parentElement.remove(); };
    var editButton = document.createElement("input");
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.onclick = function () {
        var newString = prompt("Please edit your message", text.data);
        var newText = document.createTextNode(newString);
        note.textContent = newString;
        // unsure why but writing to textContent will delete the child elements.
        note.appendChild(editButton);
        note.appendChild(deleteButton);
    };
    note.appendChild(editButton);
    note.appendChild(deleteButton);
    notes.appendChild(note);
};
