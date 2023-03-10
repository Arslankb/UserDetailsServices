import {EventEmitter} from '@angular/core';

export class UserService{
    users = [
        {name: 'Ali', job: 'Teacher', gender: 'Male', country: 'Pakistan', age: 35, avatar: 'assets/avatar/john.png'},
        {name: 'Tom', job: 'CEO', gender: 'Male', country: 'USA', age: 30, avatar: 'assets/avatar/tom.jpg'},
        {name: 'Sarah', job: 'HR', gender: 'Female', country: 'UAE', age: 28, avatar: 'assets/avatar/sarah.jpg'},
        {name: 'Rahul', job: 'Singer', gender: 'Male', country: 'India', age: 31, avatar: 'assets/avatar/rahul.jpg'},
    ]

    OnShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

    ShowUserDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
        this.OnShowDetailsClicked.emit(user);
    }
}