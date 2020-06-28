import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard, AuthGuard } from './shared/auth/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
{ path: 'login', component: LoginComponent, canActivate:[LoginAuthGuard]},
{ path: 'register', component: RegisterComponent, canActivate:[LoginAuthGuard]},
{ 
  path: '', 
  component: LayoutComponent,
  children: [
    {
      path: 'profile', 
      component: ProfileComponent, 
      canActivate:[AuthGuard]
    },
    {
      path: 'category',
      loadChildren: () =>
            import('./category/category.module').then(
                m => m.CategoryModule
            ),
      canActivate: [AuthGuard]
    },
    {
      path: 'content',
      loadChildren: () =>
            import('./content/content.module').then(
                m => m.ContentModule
            ),
      canActivate: [AuthGuard]
    },
  ],
},
{
  path: "**",
  redirectTo: "login",
},];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
