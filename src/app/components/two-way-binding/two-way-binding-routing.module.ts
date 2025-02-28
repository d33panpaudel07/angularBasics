import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // put any component here like a dashboard
    // path:'',
    // loadChildren:()=>import(./)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoWayBindingRoutingModule {}
