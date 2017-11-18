import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';

import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/Home.component';
import { FeedpublicComponent } from './routes/feedpublic/feedpublic.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';
import { RegisterComponent } from './routes/register/register.component';

import { AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeedpublicComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

