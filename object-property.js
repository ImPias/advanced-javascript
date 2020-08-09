const students = [
    {id: 10, name: "Sujon"},
    {id: 20, name: "Mintu"},
    {id: 30, name: "Rafiq"},
    {id: 40, name: "Uzzal"},
    {id: 50, name: "Arif"},
];
// const names = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     name.push(element);
// }
// console.log(name);

const names = students.map(element => element.name);
console.log(names);
const bigger = students.filter(element => element.id > 30);
console.log(bigger);