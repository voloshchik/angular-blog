import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: './admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, LoginPageComponent],
})
export class AdminModule {}
