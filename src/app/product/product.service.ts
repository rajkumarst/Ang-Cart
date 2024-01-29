import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { AppConfig, APPCONFIG_SERVICE_TOKEN } from '../service/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  constructor(private http: HttpClient, @Inject(APPCONFIG_SERVICE_TOKEN) private appConfig: AppConfig) { }

  ngOnInit() {
    
  }

  getProducts(){
    return this.http.get<any>(this.appConfig.drinksApiEndpoint);
  }
}
