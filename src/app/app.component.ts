import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User_Config_Service_Token, User_Service_Token } from './app.module';
import { UserConfigService, User1Service } from './user1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Tried1';
  bookFormGroup!: FormGroup;

  constructor(@Inject(User_Service_Token) private userService: User1Service,
  @Inject(User_Config_Service_Token) private userConfigService: UserConfigService,
  private fb: FormBuilder){
    this.bookFormGroup = fb.group({
      bookName: ['Cooking Guide']
    })
  }

  ngOnInit(){
    console.log('User Service Object: ', this.userService, this.userConfigService);

  }
}
