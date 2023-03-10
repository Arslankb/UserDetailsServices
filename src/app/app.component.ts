import { UserService } from './Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'UserDetailService';

  // Inject UserService in app component
  
  constructor(private userService: UserService){}
}
