import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { DashboardModule } from './dashboard/dashboard.module';


const routes: Routes = [
  {path: '', component: DashboardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, DashboardModule]
})
export class AppRoutingModule { }
