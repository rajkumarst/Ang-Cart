import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserConfigService, User1Service } from './user1.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserService } from './user/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { APPCONFIG_SERVICE_TOKEN } from './service/app-config.service';
import { APP_CONFIG } from './service/app-config.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductListComponent } from './product/product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

export const User_Service_Token = new InjectionToken<User1Service>('');
export const User_Config_Service_Token = new InjectionToken<UserConfigService>('');

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [
    UserService,
    { provide: User_Service_Token, useClass: User1Service },
    { provide: User_Config_Service_Token, useValue: { UserConfigService: 'http://localhost:1234' } },
    { provide: APPCONFIG_SERVICE_TOKEN, useValue: APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
