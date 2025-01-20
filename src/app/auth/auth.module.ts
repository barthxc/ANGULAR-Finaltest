import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPrimeNgModule } from '../my-prime-ng/my-prime-ng.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, AuthFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MyPrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
