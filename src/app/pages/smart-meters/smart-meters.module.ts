import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartMetersComponent } from './smart-meters.component';
import { SmartMetersRoutingModule } from './smart-meters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NewSmartMeterComponent } from './new-smart-meter/new-smart-meter.component';

@NgModule({
  imports: [
    CommonModule,
    SmartMetersRoutingModule,
    SharedModule,
  ],
  declarations: [SmartMetersComponent, NewSmartMeterComponent]
})
export class SmartMetersModule { }
