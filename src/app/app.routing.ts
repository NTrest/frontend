import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/Home.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';



const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotFoundComponent }, // always last
  ];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
