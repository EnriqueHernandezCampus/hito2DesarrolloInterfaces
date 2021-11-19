import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabdePage } from './tabde.page';

const routes: Routes = [
  {
    path: '',
    component: TabdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabdePageRoutingModule {}
