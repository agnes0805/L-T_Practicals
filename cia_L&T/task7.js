let students = [
    { name: "Mohan", marks: 65 },
    { name: "Meena", marks: 23 },
    { name: "Rahul", marks: 77 },
    { name: "Niya", marks: 39 }
];

for (let student of students) {
    if (student.marks < 40) {
        continue; // Skip failed students
    }
    console.log(student.name + " - " + student.marks);
}