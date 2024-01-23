function Employee(id, name, age, department) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.department = department;
}

function Invoice(id, name, balance, date) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.date = date;
}

var employees = [
    new Employee(1, "John Doe", 25, "Sales"),
    new Employee(2, "Jane Smith", 30, "Marketing"),
    new Employee(3, "Bob Johnson", 35, "Finance")
];
var invoices = [
    new Invoice(1, "Invoice 1", 1000, "2022-01-01"),
    new Invoice(2, "Invoice 2", 2000, "2022-02-01"),
    new Invoice(3, "Invoice 3", 3000, "2022-03-01")
];

function showBusinessOverview() {
    var totalEmployees = employees.length;
    var totalInvoices = 0;
    for (var i = 0; i < invoices.length; i++) {
      totalInvoices += parseInt(invoices[i].balance);
    }
    console.log("Tổng số nhân viên: " + totalEmployees);
    console.log("Tổng giá trị hóa đơn: " + totalInvoices);
}

function searchEmployeeById(id) {
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].id == id) {
        console.log("Tên: " + employees[i].name + ", Tuổi: " + employees[i].age + ", Phòng ban: " + employees[i].department);
        return;
      }
    }
    console.log("Không tìm thấy nhân viên có id là " + id);
}

function searchInvoiceById(id) {
    for (var i = 0; i < invoices.length; i++) {
      if (invoices[i].id == id) {
        console.log("Tên hóa đơn: " + invoices[i].name + ", Số dư: " + invoices[i].balance + ", Ngày tạo: " + invoices[i].date);
        return;
      }
    }
    console.log("Không tìm thấy hóa đơn có id là " + id);
}

function generateReport() {
    var departments = {};
    var totalInvoices = 0;
    for (var i = 0; i < employees.length; i++) {
      if (departments[employees[i].department] == undefined) {
        departments[employees[i].department] = 1;
      } else {
        departments[employees[i].department]++;
      }
    }
    for (var i = 0; i < invoices.length; i++) {
      totalInvoices += parseInt(invoices[i].balance);
    }
    console.log("Số lượng nhân viên theo từng phòng ban:");
    for (var department in departments) {
      console.log(department + ": " + departments[department]);
    }
    console.log("Số lượng phòng ban: " + Object.keys(departments).length);
    console.log("Tổng giá trị hóa đơn: " + totalInvoices);
}