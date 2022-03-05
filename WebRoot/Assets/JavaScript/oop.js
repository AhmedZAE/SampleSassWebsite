



class Location {

    constructor(country, city) { 

        this.Country = country;
        this.City = city;
    }
}


class Address extends Location {

    constructor(country, city, town) {

        super(country, city);

        this.Town = town;
    }

    ToString = () => `${this.Country}, ${this.City}, ${this.Town}`;
}


function Person(firstName, lastName, age, address) {

    this.FirstName= firstName;
    this.LastName= lastName;
    this.Age= age;
    this.Address= address;

    this.Describe = () => `${this.FirstName} ${this.LastName} is ${this.Age} years old, and lives in ${this.Address.ToString()}`;
}




const people = [
    new Person('Ahmed', 'Zaki', 21, new Address('Egypt', 'Cairo', 'Helwan')),
    new Person('Mohamed', 'Adel', 21, new Address('Egypt', 'Cairo', 'Salah Salem')),
    new Person('Reham', 'Zaki', 24, new Address('United States', 'Alabama', 'Madison')),
    new Person('Steffen', 'Diemere', 42, new Address('Germany', 'Frankfurt', 'Somewhere'))
];


let filterCon = person => person.Address.Country === 'Egypt';

filterCon = person => person.LastName === 'Zaki';


let disc = people.filter(person => filterCon(person)).map(person => person.Describe());

disc.forEach(person => {
    
    console.log(person);
});