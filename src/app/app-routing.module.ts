import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'TwoWayBinding',
    pathMatch: 'full',
  },
  {
    path: 'TwoWayBinding',
    // using lazy routing here will make web app feel slow so we have to use eager loading for routes
    // where user can reach within 1,2 clicks
    // loadChildren: () =>
    //   import('./components/home/home.module').then((x) => x.HomeModule),
    component: TwoWayBindingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
