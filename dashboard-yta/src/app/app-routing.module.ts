import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'all-projects', component: AllProjectsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'teams', component: TeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
