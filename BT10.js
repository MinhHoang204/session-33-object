class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
}
  
class Employee {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
}
  
class Invoice {
    constructor(product, quantity, value) {
      this.product = product;
      this.quantity = quantity;
      this.value = value;
    }
}
  
const products = [
    new Product(1, "Product 1", 100),
    new Product(2, "Product 2", 200),
    new Product(3, "Product 3", 300),
];
  
const employees = [
    new Employee(1, "Employee 1", 20),
    new Employee(2, "Employee 2", 25),
    new Employee(3, "Employee 3", 30),
];
  
const invoices = [
    new Invoice(products[0], 2, 200),
    new Invoice(products[1], 3, 600),
    new Invoice(products[2], 1, 300),
];
  
function displayStoreInfo() {
    console.log(`Số lượng sản phẩm: ${products.length}`);
    console.log(`Số lượng nhân viên: ${employees.length}`);
    console.log(`Doanh thu: ${invoices.reduce((sum, invoice) => sum + invoice.value, 0)}`);
}
  
function checkExpirationDate() {
    products.forEach((product) => {
      product.expirationDate = "21/01/2024";
    });
}
  
function getExpiringProducts() {
    const expiringProducts = products.filter((product) => {
      const expirationDate = new Date(product.expirationDate);
      const today = new Date();
      const timeDiff = expirationDate.getTime() - today.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff <= 7;
});
  
if (expiringProducts.length > 0) {
      console.log("Các sản phẩm sắp hết hạn sử dụng:");
      expiringProducts.forEach((product) => {
        console.log(`- ${product.name}`);
      });
      console.log("Vui lòng lưu ý!");
    } else {
      console.log("Không có sản phẩm nào sắp hết hạn sử dụng.");
    }
}
  
displayStoreInfo();
checkExpirationDate();
getExpiringProducts();