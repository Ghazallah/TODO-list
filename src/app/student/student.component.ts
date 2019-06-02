import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
    selector:'student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
   
})
export class StudentComponent
{
    student:Student=new Student();
    courses:string[]=['Java','C#','Angular'];
    constructor() {
        this.student.firstName="Mohmed";
        this.student.lastName="Ali";
        this.student.age=27;
        this.student.image="/assets/1.jpg";
     }
    getFullName():string
    {
        return this.student.firstName+" "+this.student.lastName;
    }
    isAgeAbove30(age:number):boolean
    {
        return age>30;
    }
    changeFirstName(newName:string)
    {
        this.student.firstName=newName;
    }
    increaseAge()
    {
        ++this.student.age;
    }
    decreaseAge()
    {
        --this.student.age;
    }
}