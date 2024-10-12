vishal = {
    name: "Vishal",
    age: 25,
    occupation: "Software Engineer",
    hobbies: ["Reading", "Coding", "Travelling"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001"
    },
    getAgeInMonths: function() {
        return this.age * 12;
    }
}

module.exports = vishal;