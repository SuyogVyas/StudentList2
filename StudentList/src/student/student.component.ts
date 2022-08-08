import { Component } from "@angular/core";

@Component({
    selector:'student-tag',
    templateUrl: './student.component.html'
})

export class StudentComponent
{
    studentlist:any[] = [
        {name:"Suyog", gender:"male",Rollno:1,English:30,Maths:30,Hindi:50,SS:10},
        {name:"Aman", gender:"male",Rollno:2,English:40,Maths:57,Hindi:66,SS:77},
        {name:"Mitesh", gender:"male",Rollno:3,English:35,Maths:23,Hindi:33,SS:30},
        {name:"Chinmay", gender:"male",Rollno:4,English:50,Maths:89,Hindi:50,SS:60},
        {name:"Viplav", gender:"male",Rollno:5,English:56,Maths:78,Hindi:50,SS:50},
        {name:"Sudhanshu", gender:"male",Rollno:6,English:35,Maths:37,Hindi:30,SS:40},
        {name:"Pranjali", gender:"female",Rollno:7,English:67,Maths:30,Hindi:60,SS:10},
        {name:"Sakshi", gender:"female",Rollno:8,English:45,Maths:56,Hindi:70,SS:72},
        {name:"Aditya", gender:"male",Rollno:9,English:78,Maths:45,Hindi:66,SS:60},
        {name:"Mansi", gender:"female",Rollno:10,English:13,Maths:52,Hindi:30,SS:30},

    ]
    
    
}