import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
