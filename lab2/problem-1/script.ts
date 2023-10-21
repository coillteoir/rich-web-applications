class Contact {
    name: string;
    phone: string;
    email: string;

    constructor(name: string, phone: string, email: string){
        this.name=name;
        this.phone=phone;
        this.email=email;
    }
};

const addToTable = (contact: Contact) => {
    let table = document.getElementById("contacts")
    
    let newRow = document.createElement("tr")

    let newName = document.createElement("td")
    let newPhone = document.createElement("td")
    let newEmail = document.createElement("td")

    newName.innerText = contact.name
    newPhone.innerText = contact.phone
    newEmail.innerText = contact.email

    newRow.appendChild(newName)
    newRow.appendChild(newPhone)
    newRow.appendChild(newEmail)
    table.appendChild(newRow)

}

const generateContact : Function = (form : HTMLFormElement) => {
    const inputData = <Array<HTMLInputElement>> Array.from(form.childNodes).filter(
            (elm) => elm.nodeName == "INPUT"
        )
    
    const name = inputData.find(x => x.name == "fName").value
    const number = inputData.find(x => x.name == "number").value
    const email = inputData.find(x => x.name == "email").value

    console.log(name, number, email)


    addToTable(new Contact(name, number, email))
}
