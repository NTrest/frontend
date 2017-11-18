import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { LoginComponent } from './routes/login/login.component';
import { FeedpublicComponent } from './routes/feedpublic/feedpublic.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';
import { RegisterComponent } from './routes/register/register.component';

import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedpublicComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,

    RouterModule,
  ],
  providers: [AuthService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

