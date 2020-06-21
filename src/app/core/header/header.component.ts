import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/shared/models/app-user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: AppUser;
  isLoggedInUser = false;
  notifys = [
    {
      content: 'Từ 29/2/2020, Tiki miễn phí giao tiêu chuẩn cho đơn hàng từ 250k, áp dụng phí 19k cho đơn hàng dưới 250k.',
      date: '28/02/2020'
    },
    {
      content: 'Từ 29/2/2020, Tiki miễn phí giao tiêu chuẩn cho đơn hàng từ 250k, áp dụng phí 19k cho đơn hàng dưới 250k.',
      date: '28/02/2020'
    }
  ];
  cartCount = 0;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.$isLoggedInUser.subscribe(result => {
      this.isLoggedInUser = result;
      if (result) {
        this.user = this.authService.appUser;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
