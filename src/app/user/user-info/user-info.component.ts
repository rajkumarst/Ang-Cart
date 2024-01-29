import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor(private userService: UserService){}
  userInfo!:any;

  

  ngOnInit(){
    this.userService.getUserInfo().subscribe(userInfo => {
      console.log(userInfo);
      this.userInfo = userInfo;
    });

  }



}
