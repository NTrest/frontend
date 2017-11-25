// Angular Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Module Imports
import { MaterialModule } from './material.module';


// App imports
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// Functionality imports
import { FeedprivateComponent } from './routes/feedprivate/feedprivate.component';
import { FeedpublicComponent } from './routes/feedpublic/feedpublic.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';
import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';

// Services imports
import { UserinteractionService } from './services/userinteraction.service';
import { AuthguardService } from './services/authguard.service';
import { LocationService } from './services/location.service';
import { SocketService } from './services/socket.service';
import { AuthService } from './services/auth.service';

// Layout imports
import { UsersidenavviewComponent} from './shared/friends/usersidenavview/usersidenavview.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedpublicComponent,
    FeedprivateComponent,
    RegisterComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    UsersidenavviewComponent,
    MaterialModule
],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    AuthguardService,
    LocationService,
    SocketService,
    UserinteractionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

