import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  // providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService){}

  user: { name: string; job: string; gender: string; country: string; age: number; avatar: string; } | undefined;

  ngOnInit(){
    this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) =>{
      this.user = data;
    });
  }

}
