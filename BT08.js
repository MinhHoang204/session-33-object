function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

var employees = [];

function addEmployee() {
    var name = prompt("Nhập tên nhân viên:");
    var age = prompt("Nhập tuổi nhân viên:");
    var salary = prompt("Nhập mức lương nhân viên:");
    var employee = new Employee(name, age, salary);
    employees.push(employee);
}

function showEmployees() {
    for (var i = 0; i < employees.length; i++) {
      console.log("Tên: " + employees[i].name + ", Tuổi: " + employees[i].age + ", Lương: " + employees[i].salary);
    }
}

function sortEmployeesByAge() {
    employees.sort(function(a, b) {
      return a.age - b.age;
    });
    showEmployees();
}

function calculateTotalSalary() {
    var totalSalary = 0;
    for (var i = 0; i < employees.length; i++) {
      totalSalary += parseInt(employees[i].salary);
    }
    console.log("Tổng lương của tất cả nhân viên là: " + totalSalary);
}

while (true) {
    var choice = prompt(
        "Chọn một trong các lựa chọn sau:\n1. Thêm nhân viên mới vào danh sách\n2. Hiển thị thông tin đầy đủ của tất cả nhân viên\n3. Sắp xếp danh sách nhân viên theo tuổi tăng dần\n4. Tính tổng lương của tất cả nhân viên trong danh sách\n5. Thoát chương trình"
    );
    if (choice == 1) {
      addEmployee();
    } else if (choice == 2) {
      showEmployees();
    } else if (choice == 3) {
      sortEmployeesByAge();
    } else if (choice == 4) {
      calculateTotalSalary();
    } else if (choice == 5) {
      break;
    } else {
      alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}