const add_note = () => {
    const data = <HTMLInputElement> document.getElementById("input_note")
    const text = document.createTextNode(data.value)

    const notes = document.getElementById("notes")
    const note = document.createElement("li")
    
    const colourSelect = <HTMLSelectElement> document.getElementById("colours")

    note.style.backgroundColor = colourSelect.options[colourSelect.selectedIndex].value;
    note.textContent = data.value
    
    const deleteButton = <HTMLInputElement> document.createElement("input")
    deleteButton.type = "button"
    deleteButton.value = "Delete"

    deleteButton.onclick = () => deleteButton.parentElement.remove()

    const editButton = <HTMLInputElement> document.createElement("input")
    editButton.type = "button"
    editButton.value = "Edit"

    editButton.onclick = () => {
        let newString = prompt("Please edit your message", text.data)
        
        const newText = document.createTextNode(newString)
        note.textContent = newString
        // unsure why but writing to textContent will delete the child elements.
        note.appendChild(editButton)
        note.appendChild(deleteButton)
    }
    
    note.appendChild(editButton)
    note.appendChild(deleteButton)
    notes.appendChild(note)
}
