import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, LoginComponent, RegisterComponent]
})
export class CoreModule { }
