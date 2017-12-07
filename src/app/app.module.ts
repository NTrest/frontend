import { LocationService } from './services/location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { LoginComponent } from './routes/login/login.component';
import { FeedpublicComponent } from './routes/feedpublic/feedpublic.component';
import { FeedprivateComponent } from './routes/feedprivate/feedprivate.component';
import { NotFoundComponent } from './routes/NotFound/NotFound.component';
import { RegisterComponent } from './routes/register/register.component';

import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { SocketService } from './services/socket.service';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { DmComponent } from './routes/dm/dm.component';

import { MaterialModule } from './app.material';

import { UsersidenavviewComponent} from './shared/friends/usersidenavview/usersidenavview.component';

import { UserinteractionService } from './services/userinteraction.service';

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
    DmComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [AuthService,
    AuthguardService,
    LocationService,
    SocketService,
    UserinteractionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

