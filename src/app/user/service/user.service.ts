import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig, APPCONFIG_SERVICE_TOKEN } from 'src/app/service/app-config.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, @Inject(APPCONFIG_SERVICE_TOKEN) private appConfig: AppConfig ) { }

  getUserInfo()
  {
    // this.http.get<User>(this.appConfig.userApiEndpoint);
    return this.http.get(this.appConfig.userApiEndpoint);

  }
}

