import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './routes/login/login.component';
import { FeedpublicComponent } from './routes/feedpublic/feedpublic.component';
import { RegisterComponent } from './routes/register/register.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';

import { AuthguardService } from './services/authguard.service';



const appRoutes: Routes = [
    { path: '', redirectTo: 'feedpublic', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'feedpublic', component: FeedpublicComponent, canActivate: [AuthguardService]},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NotFoundComponent }, // always last
  ];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
