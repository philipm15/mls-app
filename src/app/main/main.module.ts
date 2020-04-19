import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
} from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
  ],
})
export class MainModule {}
