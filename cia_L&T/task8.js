let students = [ 
    { name: "Rahul", marks: 85 },
    { name: "Anjali", marks: 90 },
    { name: "David", marks: 78 },
    { name: "Priya", marks: 88 }
];
students.push({ name: "Arun", marks: 95 });
let highest = students[0];
for (let student of students) {
    if (student.marks > highest.marks) {
        highest = student;
    }
}
console.log("Top Student:", highest);
