import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // using lazy routing here will make web app feel slow so we have to use eager loading for routes
    // where user can reach within 1,2 clicks
    // loadChildren: () =>
    //   import('./components/home/home.module').then((x) => x.HomeModule),
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
