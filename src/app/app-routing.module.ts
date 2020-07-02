import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/store'
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AuthGuard, AdminGuard]
  },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent
  // },
  // {
  //   path: 'verify-email',
  //   component: VerifyEmailComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
