class Customer {
    constructor(a, b, c, d) {
        this.acc_number = a;
        this.acc_name = b;
        this.acc_email = c;
        this.acc_mobile = d;
        console.log("hello , object is been created")
    }
    openAccount() {}
    deposite() {}
    getBal() {}
    withdraw() {}
    getStat() {}
    closeAccount() {}
}
let acc_albin = new Customer(101, "Albin", "albin.cherry@gmail.com", 8602179823);
console.log(acc_albin);
let acc_ashwin = new Customer(102, "ashwin", "ashwin@gmail.com", 9872343234);
console.log(acc_ashwin)