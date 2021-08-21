import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartMetersComponent } from './smart-meters.component';
import { SmartMetersRoutingModule } from './smart-meters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SmartMetersRoutingModule,
  ],
  declarations: [SmartMetersComponent]
})
export class SmartMetersModule { }
