import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';

import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/Home.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

