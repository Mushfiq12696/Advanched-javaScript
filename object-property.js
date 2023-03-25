const students = [
    { id: 21, name: 'Omar sunny' },
    { id: 31, name: 'Maaannnnnaaaaa' },
    { id: 41, name: 'Moyori' },
    { id: 51, name: 'Dipjol' },
];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     output.push(element);

// }

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);