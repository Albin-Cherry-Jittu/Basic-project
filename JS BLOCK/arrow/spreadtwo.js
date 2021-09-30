const first = { name: 'albin' };
const second = { job: 'web devloper' };

const combine = {...first, ...second, location: 'banglore' };

console.log(combine);