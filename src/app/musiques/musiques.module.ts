import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusiquesPage } from './musiques.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MusiquesPageRoutingModule } from './musiques-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MusiquesPageRoutingModule
  ],
  declarations: [MusiquesPage]
})
export class MusiquesPageModule {}
