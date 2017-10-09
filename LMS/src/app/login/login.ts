import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
