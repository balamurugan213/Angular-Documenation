import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HamletsComponent } from './hamlets/hamlets.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'nav',component: NavComponent},
  {path:'hamlet',component:HamletsComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
