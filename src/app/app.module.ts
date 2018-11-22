import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './common/auth/login/login.component';
import { RegisterComponent } from './common/auth/register/register.component';
import { HomeComponent } from './common/home/home.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { HeaderComponent } from './common/partials/header/header.component';
import { FooterComponent } from './common/partials/footer/footer.component';
import { SidebarComponent } from './common/partials/sidebar/sidebar.component';
import { PortfolioComponent } from './common/portfolio/portfolio.component';
import { BlogComponent } from './common/blog/blog.component';
import { ContactMeComponent } from './common/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
