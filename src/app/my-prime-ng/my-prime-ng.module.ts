import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [InputTextModule, ButtonModule, PasswordModule, CardModule],
  exports: [InputTextModule, ButtonModule, PasswordModule, CardModule],
})
export class MyPrimeNgModule {}
