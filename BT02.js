let phoneBook = [
    {
      name: "John",
      phoneNumber: "123-456-7890",
      email: "john@example.com"
    },
    {
      name: "Jane",
      phoneNumber: "098-765-4321",
      email: "jane@example.com"
    },
    {
      name: "Bob",
      phoneNumber: "555-555-5555",
      email: "bob@example.com"
    }
];

for (let i = 0; i < phoneBook.length; i++) {
    console.log("Name: " + phoneBook[i].name);
    console.log("Phone Number: " + phoneBook[i].phoneNumber);
    console.log("Email: " + phoneBook[i].email);
}