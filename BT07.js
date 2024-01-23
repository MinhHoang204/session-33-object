class Order {
    constructor(number, date, total) {
      this.number = number;
      this.date = date;
      this.total = total;
    }
}
  
let orders = [];
  
function addOrder() {
    let number = prompt("Nhập số hóa đơn:");
    let date = prompt("Nhập ngày tạo hóa đơn:");
    let total = parseFloat(prompt("Nhập tổng giá trị hóa đơn:"));
    let order = new Order(number, date, total);
    orders.push(order);
    alert("Hóa đơn đã được thêm vào danh sách.");
}
  
function displayOrders() {
    if (orders.length === 0) {
      alert("Danh sách hóa đơn hiện đang trống.");
    } else {
      let orderInfo = "Thông tin đầy đủ của các hóa đơn:\n";
      for (let order of orders) {
        orderInfo += `Số hóa đơn: ${order.number}, Ngày tạo: ${order.date}, Tổng giá trị: ${order.total}\n`;
      }
      alert(orderInfo);
    }
}
  
function calculateTotal() {
    let total = 0;
    for (let order of orders) {
      total += order.total;
    }
    alert(`Tổng giá trị của tất cả hóa đơn là: ${total}`);
}
  
  
while (true) {
    let choice = parseInt(prompt("Chọn một trong các lựa chọn sau:\n1. Thêm hóa đơn\n2. Hiển thị danh sách hóa đơn\n3. Tính tổng giá trị hóa đơn\n4. Thoát chương trình"));
  
    switch (choice) {
      case 1:
        addOrder();
        break;
      case 2:
        displayOrders();
        break;
      case 3:
        calculateTotal();
        break;
      case 4:
        alert("Đã thoát chương trình.");
        break;
      default:
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
  
    if (choice === 4) {
      break;
    }
}