import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabdePageRoutingModule } from './tabde-routing.module';

import { TabdePage } from './tabde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabdePageRoutingModule
  ],
  declarations: [TabdePage]
})
export class TabdePageModule {}
