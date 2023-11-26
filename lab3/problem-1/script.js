const inputNote = document.getElementById("note");
const notes = document.getElementById("notes");
const colourSelect = document.getElementById("colours");

const addNoteStream = rxjs.fromEvent(
  document.getElementById("submit"),
  "click",
);

const noteCreatedStream = addNoteStream.pipe(
  rxjs.map(() => {
    const text = inputNote.value;
    const backgroundColor =
      colourSelect.options[colourSelect.selectedIndex].value;

    const note = document.createElement("li");
    note.style.backgroundColor = backgroundColor;
    note.textContent = text;

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";

    const deleteClickStream = rxjs.fromEvent(deleteButton, "click");
    deleteClickStream.subscribe(() => {
      note.parentNode?.removeChild(note);
    });

    const editButton = document.createElement("input");
    editButton.type = "button";
    editButton.value = "Edit";

    const editClickStream = rxjs.fromEvent(editButton, "click");
    const editSubject = new rxjs.Subject();
    editClickStream.subscribe(() => {
      const newString = prompt("Please edit your message", text);
      editSubject.next(newString);
    });

    note.appendChild(editButton);
    note.appendChild(deleteButton);

    editSubject.pipe(
      rxjs.map((newString) => {
        const newText = document.createTextNode(newString);
        return newText;
      }),
      rxjs.tap((newText) => {
        note.removeChild(note.firstChild);
        note.appendChild(newText);
      }),
    );

    return note;
  }),
);

noteCreatedStream.subscribe((note) => {
  notes.appendChild(note);
});
