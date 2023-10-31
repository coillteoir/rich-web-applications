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
    
    const name: string = inputData.find(x => x.name == "fName").value
    const number: string = inputData.find(x => x.name == "number").value
    const email: string = inputData.find(x => x.name == "email").value

    inputData.find(x => x.name == "fName").value = ""
    inputData.find(x => x.name == "number").value = ""
    inputData.find(x => x.name == "email").value = ""

    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    const phoneNumberPattern = /^\d{10}$/

    if(name === "" || !phoneNumberPattern.test(number) || !emailPattern.test(email)) {
        alert("Invalid input")
    } else {
        addToTable(new Contact(name, number, email))
    }
}

const searchNumber = (value: string) => {
    let table = <HTMLTableElement> document.getElementById("contacts")
    
    let rows = <Array<HTMLTableRowElement>> Array.from(table.childNodes)

    rows.slice(1).forEach(
        (elm) => {
            if(elm.cells && elm.cells[1]) {
                if(elm.cells[1].innerText.includes(value)) {
                    elm.style.visibility = "visible"
                } else {
                    elm.style.visibility = "hidden"
                }
            } 
        }
    )
}
