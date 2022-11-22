import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    TeamsComponent,
    AllProjectsComponent,
    OverviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
