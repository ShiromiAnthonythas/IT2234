const express = require('express');
const app= express();
const port=3001;
//array of student JSON details

let students =[
    {regno:'2021ICT86', name:'Shiro', age:22, course:'IT', gender:'Female'},
	{regno:'2021ICT51', name:'Shara', age:23, course:'IT', gender:'Female'},
	{regno:'2021ICT121', name:'kabi', age:22, course:'IT', gender:'male'},
    {regno:'2021ICT87', name:'kesha', age:22, course:'IT', gender:'Feale'},
    {regno:'2021ICT74', name:'Manoj', age:22, course:'IT', gender:'male'}
];

app.get('/stu', (req, res)=>{
    res.send(students);
});

app.get('/stu/:id', (req, res)=>{
    const id=req.params.id
    //console.log(id)
    const result= students.find(student=>student.regno==id);
    //check student is available or not, if not return an error message
    
    if(result){
        res.send(result);
    }
    else{
        res.status(404).send("student not found");
    }
});

// FILTER STUDENTS BY GENDER 

app.get('/stu/gender/:gender', (req, res)=>{
    const gender=req.params.gender
    //console.log(gender)
    const result= students.filter(student=>student.gender==gender);
    res.send(result);
});


app.get('/', (req, res)=>{
    res.send('Hello Express JS');
});


app.get('/msg', (req, res)=>{
    res.send('Hello IT students');
});


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});