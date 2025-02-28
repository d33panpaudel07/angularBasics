import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoWayBindingRoutingModule } from './two-way-binding-routing.module';
import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
  declarations: [TwoWayBindingComponent],
  imports: [CommonModule, TwoWayBindingRoutingModule, NgModule],
})
export class HomeModule {}
