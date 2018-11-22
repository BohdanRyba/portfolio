import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./common/home/home.component";
import {AboutUsComponent} from "./common/about-us/about-us.component";
import {LoginComponent} from "./common/auth/login/login.component";
import {RegisterComponent} from "./common/auth/register/register.component";
import {BlogComponent} from "./common/blog/blog.component";
import {ContactMeComponent} from "./common/contact-me/contact-me.component";
import {PortfolioComponent} from "./common/portfolio/portfolio.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutUsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'blog', component: BlogComponent},
  {
    path: 'auth', children: [
      {path: '', redirectTo: 'login',pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
