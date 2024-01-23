let phoneBook = [
    {
      name: "John",
      phoneNumber: "123-456-7890",
      email: "john@example.com",
      displayContactInfo: function() {
        console.log("Name: " + this.name);
        console.log("Phone Number: " + this.phoneNumber);
        console.log("Email: " + this.email);
      }
    },
    {
      name: "Jane",
      phoneNumber: "098-765-4321",
      email: "jane@example.com",
      displayContactInfo: function() {
        console.log("Name: " + this.name);
        console.log("Phone Number: " + this.phoneNumber);
        console.log("Email: " + this.email);
      }
    },
    {
      name: "Bob",
      phoneNumber: "555-555-5555",
      email: "bob@example.com",
      displayContactInfo: function() {
        console.log("Name: " + this.name);
        console.log("Phone Number: " + this.phoneNumber);
        console.log("Email: " + this.email);
      }
    }
];

for (let i = 0; i < phoneBook.length; i++) {
    phoneBook[i].displayContactInfo();
}  