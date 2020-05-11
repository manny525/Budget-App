//object destructuring

const person = {
    name: 'Manny',
    age: 21,
    location: {
        city: 'Jaipur',
        temp: 28
    }
}

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: "React",
    author: "Andrew",
    publisher: {
        name: "Udemy",
        cost: 420
    }
}

const { title: course, author: mentor } = book;
const {name: website = 'Self-published', cost = 0} = book.publisher

console.log(`He is learning ${course} by ${mentor} thorough ${website} by paying ${cost}`)

//array destructuring

const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19162' ]

const [street, cityAdd, state='New York',zip] = address

console.log(`${state} ${zip}`)