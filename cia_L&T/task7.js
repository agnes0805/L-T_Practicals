let students = [
    { name: "Anu", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Sneha", marks: 75 },
    { name: "Akhil", marks: 28 }
];

for (let student of students) {
    if (student.marks < 40) {
        continue; // Skip failed students
    }
    console.log(student.name + " - " + student.marks);
}