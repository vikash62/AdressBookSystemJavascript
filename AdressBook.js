class Contact{

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName)
    {
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else
        throw 'First Name Invalid'
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName)
    {
        let lastNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else
        throw 'Last Name Invalid'
    }

    get address()
    {
        return this._address;
    }

    set address(address)
    {
        let addressRegex = RegExp('^[A-Za-z\\s0-9]{4,}$')
        if(addressRegex.test(address))
        this._address = address;
        else
        throw 'Address Invalid'
    }

    get city()
    {
        return this._city;
    }

    set city(city)
    {
        let cityRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(cityRegex.test(city))
        this._city = city;
        else
        throw 'City Invalid'
    }

    get state()
    {
        return this._state;
    }

    set state(state)
    {
        let stateRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(stateRegex.test(state))
        this._state = state;
        else
        throw 'State Invalid'
    }

    get zip()
    {
        return this._zip;
    }

    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{3}[\\s]*[0-9]{2,}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw 'Zip Invalid'
    }

    get phone()
    {
        return this._phone;
    }

    set phone(phone)
    {
        let phoneRegex = RegExp('^[1-9][0-9]{9}$');
        if(phoneRegex.test(phone))
        this._phone = phone;
        else
        throw 'Phone Invalid'
    }

    get email()
    {
        return this._email;
    }

    set email(email)
    {
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z_+.-]*[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]{2,}$');
        if(emailRegex.test(email))
        this._email = email;
        else
        throw 'Email Incorrect';
    }

    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}
let addressBook = new Array();

function addContact(...params) {
    try{
    let newContact = new Contact(params[0],params[1],params[2],params[3],params[4],params[5],params[6],params[7]);
    addressBook.push(newContact);
    }catch(e){
        console.error(e);
    }
    
}

addContact("Vikash","pathak","Old Subedhar","Nagpur","Maharashtra",440024,3369784512,"Vikashpathak01@gmail.com");
addContact("Rohit","pathak","New Subedhar","Nagpur","Maharashtra",440026,7777979699,"rohitpathak@outlook.com");
addContact("Deepika","Ganorkar","Shinde Nagar","Amravati","Maharashtra",440021,9874563210,"deepg@gmail.com");
addContact("Sagar","Mode","Central City","Gondia","MP",440023,7894561230,"sagarm@yahoo.com");
addContact("Shub","Pande","North Zone","Chandrapur","Maharashtra",440025,1234567890,"shubp@gmail.com");
console.log(addressBook.toString())
