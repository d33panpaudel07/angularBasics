import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [AppComponent, TwoWayBindingComponent],
  imports: [CommonModule, AppRoutingModule, NgModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
