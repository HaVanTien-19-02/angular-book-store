import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('btnCloseModal') btnCloseModal;

  invalidUser = false;
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(loginForm): void {
    this.invalidUser = false;
    const user = loginForm.value;
    console.log(user);
    this.subscription = this.authService.login(user).subscribe(result => {
      if (result) {
        this.invalidUser = false;
        this.btnCloseModal.nativeElement.click();
      } else {
        this.invalidUser = true;
      }
    });
  }

  closeModal(loginForm): void {
    this.invalidUser = false;

    loginForm.reset();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
