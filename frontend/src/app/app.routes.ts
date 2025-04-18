import { Routes } from '@angular/router';
import { Oauth2RedirectComponent } from './components/oauth2_redirect.component';
import { AuthGuard } from './core/auth.guard';

import { LoginComponent } from './components/login.components';
import { LabelConstants } from './constant/label.constants';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register.components';
import { RouteLink } from './constant/route-link';


export const routes: Routes = [
  {
    path: '',
    redirectTo : 'dashboard',
    pathMatch: 'full',
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard],
    title:"Dashboard",
  },
	{
		path: RouteLink.registerRoute,
		component: RegisterComponent,
		title: LabelConstants.registerPage,
	},
	{
		path: RouteLink.loginRoute,
		component: LoginComponent,
		title: LabelConstants.logInPage,
	},
  {
    path: 'oauth2-redirect',
    component: Oauth2RedirectComponent,
    title: 'Đang xử lý đăng nhập...',
  }
];
