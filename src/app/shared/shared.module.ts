import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const exports = [
  NgbModule,
  NgxDatatableModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ...exports
  ],
  imports: [
    RouterModule,
    CommonModule,
    PerfectScrollbarModule,
    ...exports
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  providers: [],
})
export class SharedModule { }
