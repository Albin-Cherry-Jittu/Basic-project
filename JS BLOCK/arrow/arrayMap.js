// const color = ["red", "yellow", "blue"];
// const item = color.map(function(color) {
//     return '<li>' + color + '</li>';
// });

const color = ["red", "yellow", "blue"];
const item = color.map(color => `<li>${color}</li>`);
console.log(item);