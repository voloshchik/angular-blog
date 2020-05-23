import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthService } from './shared/services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './shared/services/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'create',
            component: CreatePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'post/:id/edit',
            component: EditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardComponent,
    CreatePageComponent,
    EditPageComponent,
  ],
  providers: [, AuthGuard],
})
export class AdminModule {}
