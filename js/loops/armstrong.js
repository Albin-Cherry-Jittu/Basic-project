sum = 0
let num = 153
while (num > sum) {
    let reminder = num % 10;
    num = parseInt(num / 10);
    temp = reminder * reminder * reminder;
    sum = sum + temp
}
if (sum == num) {
    console.log(' is a armstrong');
} else {
    console.log(' not a armstrong');
}