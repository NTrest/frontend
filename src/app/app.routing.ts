import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/Home.component';
import { RegisterComponent } from './routes/register/register.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';



const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NotFoundComponent }, // always last
  ];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
