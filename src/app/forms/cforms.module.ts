import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { FormsValidationService } from '../services/forms-validation.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    FormsValidationService
  ]
})
export class CFormsModule { }
