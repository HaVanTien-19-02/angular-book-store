import { AppUser } from '../models/app-user';

export const users: AppUser[] = [
  {
    $key: '1',
    name: 'Tống Minh Giang',
    email: 'monkeytgoku@gmail.com',
    password: '123456',
    mobile: '0949348386',
    isAdmin: true
  },
  {
    $key: '2',
    name: 'Nguyễn Văn An',
    email: 'nvan@gmail.com',
    password: '123456',
    mobile: '0949348386',
    isAdmin: false
  }
];
