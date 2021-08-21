import { RouterModule, Routes } from '@angular/router';
import { StatementsComponent } from './statements.component';

import { NgModule } from '@angular/core'

const routes: Routes = [
  { path: '', component: StatementsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementsRoutingModule { }
