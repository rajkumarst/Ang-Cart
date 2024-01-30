import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserService } from './user/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { APPCONFIG_SERVICE_TOKEN } from './service/app-config.service';
import { APP_CONFIG } from './service/app-config.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductListComponent } from './product/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
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
  ],
  providers: [
    UserService,
    { provide: APPCONFIG_SERVICE_TOKEN, useValue: APP_CONFIG },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
