const first = [1, 2, 3];
const second = [4, 5, 6];

//const combine = first.concat(second);
const combine = [...first, 'a', ...second, 'b'];

console.log(combine);

const clone = [...first];

console.log(clone);