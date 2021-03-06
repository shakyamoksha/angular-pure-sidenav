import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './component/analytics.component';


@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
